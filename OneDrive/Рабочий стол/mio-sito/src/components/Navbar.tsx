"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ── Icons ──────────────────────────────────────────────── */
const IconHome = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);
const IconBuilding = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);
const IconPlan = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);
const IconMortgage = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
);
const IconFAQ = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);
const IconBlog = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
  </svg>
);
const IconContact = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const IconBusiness = () => (
  <svg className="w-[45%] h-[45%] text-[#273852]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25h4.5M20.25 14.15l-6.75-6.75M20.25 14.15H15m5.25 0V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h4.5v4.5" />
  </svg>
);

const navItems = [
  { href: "/",           label: "Главная",   Icon: IconHome     },
  { href: "/complexes",  label: "Комплексы", Icon: IconBuilding },
  { href: "/mortgage",   label: "Ипотека",   Icon: IconMortgage },
  { href: "/business",   label: "Бизнес",    Icon: IconBusiness },
  { href: "/faq",        label: "FAQ",       Icon: IconFAQ      },
  { href: "/blog",       label: "Блог",      Icon: IconBlog     },
  { href: "/contact",    label: "Контакты",  Icon: IconContact  },
];

/* ── Single dock item ───────────────────────────────────── */
function DockItem({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: () => React.ReactElement;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: 8,  scale: 0.85 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute bottom-full mb-3 px-3 py-1.5 bg-[#273852] text-white font-sans text-[11px] tracking-[0.05em] rounded-lg whitespace-nowrap pointer-events-none shadow-lg"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {label}
            {/* Arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#273852]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Item button */}
      <motion.a
        href={href}
        whileHover={{ scale: 1.48 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl sm:rounded-2xl shadow-sm cursor-pointer"
        style={{
          transformOrigin: "bottom center",
          background: hovered ? "#FFF4EC" : "white",
          border: `1px solid ${hovered ? "rgba(240,115,32,0.5)" : "#E8E4DC"}`,
        }}
      >
        <Icon />
      </motion.a>
    </div>
  );
}

/* ── Tooltip animato Alina (a DESTRA, freccia punta a sinistra) ── */
function AlinaTooltip() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const first = setTimeout(() => {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 3000);
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 8000);
    return () => { clearTimeout(first); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 8, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 8, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="hidden sm:block absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none z-20"
        >
          {/* Freccia che punta a sinistra verso l'icona */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-[#F07320]" />
          <div
            className="px-3 py-1.5 rounded-xl text-white text-[11px] font-semibold shadow-lg"
            style={{
              background: "#F07320",
              fontFamily: "var(--font-inter), sans-serif",
              boxShadow: "0 4px 16px rgba(240,115,32,0.45)",
            }}
          >
            Спросите Алину
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Navbar ─────────────────────────────────────────────── */
export default function Navbar() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  /* Hero is now split white/photo — logo is always over the white panel */
  useEffect(() => {
    const check = () => setIsOverDark(false);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  /* Sync with ChatWidget via custom event */
  useEffect(() => {
    const onStateChange = (e: Event) => setChatOpen((e as CustomEvent).detail.open);
    window.addEventListener("chat-state", onStateChange);
    return () => window.removeEventListener("chat-state", onStateChange);
  }, []);

  const toggleChat = () => {
    window.dispatchEvent(new CustomEvent("chat-toggle"));
  };

  return (
    <>
      {/* ── Logo — fixed top-left ── */}
      <motion.a
        href="/"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1,  y: 0   }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-6 lg:left-10 z-50 flex items-center group"
      >
        <div
          className="flex items-center gap-3 px-3 py-2 rounded-2xl transition-all duration-500"
          style={{
            background: isOverDark ? "transparent" : "rgba(255,255,255,0.92)",
            backdropFilter: isOverDark ? "none" : "blur(16px)",
            boxShadow: isOverDark
              ? "none"
              : "0 4px 20px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.9) inset",
          }}
        >
          {/* Logo mark */}
          <div className="flex-shrink-0" style={{ filter: isOverDark ? "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" : "none" }}>
            <svg width="46" height="46" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
              {/* House roof */}
              <path d="M18 29 L32 14 L46 29" stroke="#54C5F8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              {/* House body */}
              <rect x="18" y="29" width="28" height="19" rx="2" stroke="#54C5F8" strokeWidth="4"/>
              {/* Door */}
              <rect x="27" y="36" width="10" height="12" rx="1.5" fill="#54C5F8" fillOpacity="0.55"/>
              {/* Wave */}
              <path d="M7 53 Q17 46 27 53 Q37 60 47 53 Q55 47 58 50" stroke="#29B6F6" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
          </div>
          {/* Name + subtitle */}
          <div className="hidden sm:flex flex-col leading-none">
            <span
              className="font-serif text-[19px] font-bold leading-tight transition-all duration-500"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: isOverDark ? "#ffffff" : "#273852",
                textShadow: isOverDark ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
              }}
            >
              Южный Бизнес Инвест
            </span>
            <span
              className="font-sans text-[9px] tracking-[0.18em] uppercase mt-0.5 transition-colors duration-500"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: isOverDark ? "rgba(255,255,255,0.60)" : "rgba(39,56,82,0.50)",
              }}
            >
              Агентство Недвижимости
            </span>
          </div>
        </div>
      </motion.a>

      {/* ── Bottom Magnetic Dock ── */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          id="nav-dock"
          className="pointer-events-auto flex items-end gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-3 rounded-[20px] sm:rounded-[28px] border border-white/70"
          style={{
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 10px 50px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.8) inset",
          }}
        >
          {navItems.map((item) => (
            <DockItem key={item.href} {...item} />
          ))}

          {/* Divider — hidden on mobile */}
          <div className="hidden sm:block w-px h-7 bg-[#E5E1D8] mx-1.5 mb-1 self-center" />

          {/* CTA — hidden on mobile */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="hidden sm:flex self-center px-5 py-2.5 bg-[#F07320] text-white font-sans text-[11px] font-semibold tracking-[0.08em] uppercase rounded-[14px] hover:bg-[#E06218] transition-colors duration-200 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              boxShadow: "0 4px 18px rgba(240,115,32,0.45)",
            }}
          >
            Получить консультацию
          </motion.a>

          {/* Divider — hidden on mobile */}
          <div className="hidden sm:block w-px h-7 bg-[#E5E1D8] mx-1.5 mb-1 self-center" />

          {/* AI Bot button */}
          <div className="relative flex items-center self-end mb-1">

            {/* Pulse ring — FUORI dal bottone così non copre la foto */}
            {!chatOpen && (
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{ scale: [1, 1.65, 1], opacity: [0.45, 0, 0.45] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "rgba(240,115,32,0.28)" }}
              />
            )}

            {/* Bottone foto Alina */}
            <motion.button
              onClick={toggleChat}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden relative z-10"
              style={{
                boxShadow: chatOpen
                  ? "0 4px 14px rgba(39,56,82,0.4)"
                  : "0 4px 18px rgba(240,115,32,0.5)",
                border: chatOpen ? "2.5px solid #364B68" : "2.5px solid #F07320",
              }}
              title="AI-помощник Алина"
            >
              {chatOpen ? (
                <div className="w-full h-full bg-[#273852] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src="/alina-avatar.webp"
                  alt="Алина"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              )}
            </motion.button>

            {/* Badge онлайн — angolo in alto a destra del bottone */}
            {!chatOpen && (
              <div className="absolute -top-1 -right-1 z-20 flex items-center gap-0.5 bg-white rounded-full px-1.5 py-[2px] shadow-md" style={{ border: "1px solid #D1FAE5" }}>
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[8px] font-sans text-green-600 font-bold leading-none" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  онлайн
                </span>
              </div>
            )}

            {/* Tooltip a DESTRA — freccia punta a sinistra verso l'icona */}
            {!chatOpen && <AlinaTooltip />}

          </div>

        </motion.div>
      </div>
    </>
  );
}
