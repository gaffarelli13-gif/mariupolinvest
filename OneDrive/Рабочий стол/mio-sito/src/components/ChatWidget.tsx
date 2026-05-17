"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function renderContent(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) =>
    part.match(/^https?:\/\//) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#F07320", textDecoration: "underline", wordBreak: "break-all" }}
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const BOT_AVATAR = (
  <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-[#F07320]/30">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/alina-avatar.webp" alt="Мари" className="w-full h-full object-cover object-top" />
  </div>
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [leadQualified, setLeadQualified] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dockWidth, setDockWidth] = useState<number | null>(null);

  // Match dock width
  useEffect(() => {
    const measure = () => {
      const dock = document.getElementById("nav-dock");
      if (dock) setDockWidth(dock.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Listen for toggle from Navbar
  useEffect(() => {
    const onToggle = () => {
      setIsOpen((v) => {
        const next = !v;
        window.dispatchEvent(new CustomEvent("chat-state", { detail: { open: next } }));
        return next;
      });
    };
    window.addEventListener("chat-toggle", onToggle);
    return () => window.removeEventListener("chat-toggle", onToggle);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Send greeting when chat opens for first time
  useEffect(() => {
    if (isOpen && !hasGreeted && messages.length === 0) {
      setHasGreeted(true);
      setIsLoading(true);
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Здравствуйте" }],
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          setMessages([
            { role: "user", content: "Здравствуйте" },
            { role: "assistant", content: data.message },
          ]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isOpen, hasGreeted, messages.length]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      setMessages([...newMessages, { role: "assistant", content: data.message }]);
      if (data.leadQualified) setLeadQualified(true);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Извините, произошла ошибка. Попробуйте ещё раз." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          /* Wrapper centrato sopra il dock */
          <div className="fixed bottom-28 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: dockWidth ? `${dockWidth}px` : "380px",
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(240,115,32,0.2)",
              maxHeight: "520px",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
              style={{ background: "#273852" }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F07320]/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/alina-avatar.webp" alt="Мари" className="w-full h-full object-cover object-top" />
                </div>
                {/* Green online dot */}
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#273852]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Мари — AI-помощник
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/50 text-[10px]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    Онлайн · Южный Бизнес Инвест
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("chat-state", { detail: { open: false } }));
                }}
                className="text-white/40 hover:text-white/80 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
              style={{ minHeight: 0, maxHeight: "360px" }}
            >
              {messages.length === 0 && !isLoading && (
                <div className="text-center text-sm text-[#5A6A7A] mt-8" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Начинаем разговор...
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && BOT_AVATAR}
                  <div
                    className="max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      ...(msg.role === "user"
                        ? {
                            background: "#F07320",
                            color: "#fff",
                            borderBottomRightRadius: "4px",
                          }
                        : {
                            background: "#F4F6F8",
                            color: "#273852",
                            borderBottomLeftRadius: "4px",
                          }),
                    }}
                  >
                    {renderContent(msg.content)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start"
                >
                  {BOT_AVATAR}
                  <div
                    className="px-3 py-2.5 rounded-2xl rounded-bl-[4px] flex items-center gap-1"
                    style={{ background: "#F4F6F8" }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-[#273852]/30"
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Lead qualified success */}
              {leadQualified && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mx-auto mt-2 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2"
                  style={{
                    background: "rgba(46,155,122,0.1)",
                    border: "1px solid rgba(46,155,122,0.3)",
                    color: "#2E9B7A",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Данные переданы Оксане
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
              style={{ borderTop: "1px solid #F0EDE8" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Написать сообщение..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 rounded-xl text-sm outline-none resize-none"
                style={{
                  background: "#F4F6F8",
                  color: "#273852",
                  fontFamily: "var(--font-inter), sans-serif",
                  border: "1px solid transparent",
                }}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  background: input.trim() && !isLoading ? "#F07320" : "#E8E4DC",
                }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: input.trim() && !isLoading ? "#fff" : "#9CA3AF" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </motion.div>
          </div>
        )}
      </AnimatePresence>

    </>
  );
}
