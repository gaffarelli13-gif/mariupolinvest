"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const NAV_ITEMS = [
  { href: "/complexes", title: "Жилые Комплексы", sub: "Бизнес / Комфорт / Эконом" },
  { href: "/mortgage",  title: "Ипотека 2%",      sub: "Для граждан РФ"           },
  { href: "/business",  title: "Инвестиции",       sub: "Пример расчёта"           },
];

const COL_STATS = [
  { num: "10+",     lbl: "Лет опыта",    small: false },
  { num: "150+",    lbl: "Сделок",       small: false },
  { num: "50 000+", lbl: "Аренда ₽/мес", small: true  },
  { num: "до 2030", lbl: "Программа",    small: true  },
];

/* ════════════════════════════════════════════
   MOBILE HERO  (< lg)
════════════════════════════════════════════ */
function MobileHero() {
  return (
    <section className="block lg:hidden bg-white">

      {/* ── Photo ── */}
      <div className="relative w-full" style={{ height: 260 }}>
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.webp')",
            filter: "brightness(0.82) saturate(0.88)",
          }}
        />
        {/* Fade to white at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, white)" }}
        />

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute top-3 right-3 bg-white/96 shadow-lg overflow-hidden"
          style={{ borderRadius: 6, backdropFilter: "blur(8px)" }}
        >
          {COL_STATS.map((item, i) => (
            <div
              key={item.lbl}
              style={{
                padding: "7px 12px",
                borderBottom: i < COL_STATS.length - 1 ? "1px solid rgba(39,56,82,0.07)" : "none",
              }}
            >
              <div style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: 14, color: "#F07320", lineHeight: 1, fontWeight: 400,
              }}>
                {item.num}
              </div>
              <div style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 7, fontWeight: 600, letterSpacing: "1.5px",
                textTransform: "uppercase", color: "#8a9ab0", marginTop: 2,
              }}>
                {item.lbl}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Text content ── */}
      <div className="px-5 pt-5">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 9, fontWeight: 700, letterSpacing: "3.5px",
            textTransform: "uppercase", color: "#F07320", marginBottom: 12,
          }}
        >
          Мариуполь · Недвижимость у моря
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(26px, 7vw, 38px)",
            fontWeight: 700, lineHeight: 1.1,
            color: "#273852", letterSpacing: "-0.01em", marginBottom: 14,
          }}
        >
          Квартира как актив —{" "}
          <span style={{ color: "#F07320" }}>ипотека 2%</span>
        </motion.h1>

        {/* Orange rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.45 }}
          style={{ width: 44, height: 2, background: "#F07320", marginBottom: 14, transformOrigin: "left" }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 13, fontWeight: 400, color: "#6b7a8d",
            lineHeight: 1.7, marginBottom: 0,
          }}
        >
          Высокий арендный спрос и ипотека 2% — стратегия для инвестора.
          Сопровождение от покупки до аренды — бесплатно.
        </motion.p>
      </div>

      {/* ── Nav cards — horizontal scroll ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="mt-5 overflow-x-auto"
        style={{
          borderTop: "1px solid rgba(39,56,82,0.1)",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div style={{ display: "flex", minWidth: "max-content" }}>
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                width: 148,
                display: "flex",
                flexDirection: "column",
                padding: "16px 16px 14px",
                textDecoration: "none",
                borderRight: i < NAV_ITEMS.length - 1 ? "1px solid rgba(39,56,82,0.1)" : "none",
              }}
            >
              <span style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.05em",
                textTransform: "uppercase", color: "#273852",
                display: "block", marginBottom: 4, lineHeight: 1.3,
              }}>
                {item.title}
              </span>
              <span style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 11, color: "#8a9ab0", display: "block", lineHeight: 1.4,
              }}>
                {item.sub}
              </span>
              <span style={{
                display: "block", marginTop: 10,
                fontSize: 14, color: "rgba(39,56,82,0.22)",
              }}>→</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════
   DESKTOP HERO  (>= lg)
════════════════════════════════════════════ */
function DesktopHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0px", "-26vh"]);

  return (
    <section ref={containerRef} className="hidden lg:block" style={{ height: "200vh" }}>

      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 flex overflow-hidden" style={{ height: "100vh", minHeight: 600 }}>

        {/* LEFT — white panel */}
        <div
          className="relative z-10 flex flex-col bg-white overflow-hidden"
          style={{ width: "48%", minWidth: 320, paddingBottom: 120 }}
        >
          <motion.div
            style={{
              y: contentY,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "80px 52px 0",
            }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: "4px",
                textTransform: "uppercase", color: "#F07320", marginBottom: 24,
              }}
            >
              Мариуполь · Недвижимость у моря
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(28px, 3.2vw, 50px)",
                fontWeight: 700, lineHeight: 1.08,
                color: "#273852", letterSpacing: "-0.01em", marginBottom: 20,
              }}
            >
              Квартира как актив —{" "}
              <span style={{ color: "#F07320" }}>ипотека 2%</span>
            </motion.h1>

            {/* Orange rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.75, duration: 0.55, ease: "easeOut" }}
              style={{
                width: 56, height: 2, background: "#F07320",
                marginBottom: 20, transformOrigin: "left",
              }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 14, fontWeight: 400, color: "#6b7a8d",
                lineHeight: 1.7, maxWidth: 320,
              }}
            >
              Высокий арендный спрос и ипотека 2% — стратегия для инвестора.{" "}
              <br />
              Наше сопровождение клиента от покупки квартиры до аренды — бесплатно.
            </motion.p>
          </motion.div>

          {/* ── 3 nav cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            style={{ display: "flex", flexShrink: 0, borderTop: "1px solid rgba(39,56,82,0.1)" }}
          >
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  flex: 1, display: "flex", flexDirection: "column",
                  padding: "22px 20px 20px", textDecoration: "none",
                  transition: "background 0.18s",
                  borderRight: i < NAV_ITEMS.length - 1 ? "1px solid rgba(39,56,82,0.1)" : "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#273852";
                  const spans = el.querySelectorAll("span");
                  if (spans[0]) spans[0].style.color = "#F07320";
                  if (spans[1]) spans[1].style.color = "rgba(240,115,32,0.65)";
                  if (spans[2]) spans[2].style.color = "#F07320";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  const spans = el.querySelectorAll("span");
                  if (spans[0]) spans[0].style.color = "#273852";
                  if (spans[1]) spans[1].style.color = "#8a9ab0";
                  if (spans[2]) spans[2].style.color = "rgba(39,56,82,0.22)";
                }}
              >
                <span style={{
                  fontFamily: "var(--font-inter), sans-serif", fontSize: 13,
                  fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase",
                  color: "#273852", display: "block", marginBottom: 5,
                  lineHeight: 1.3, transition: "color 0.18s",
                }}>
                  {item.title}
                </span>
                <span style={{
                  fontFamily: "var(--font-inter), sans-serif", fontSize: 12,
                  color: "#8a9ab0", display: "block", lineHeight: 1.4,
                  transition: "color 0.18s",
                }}>
                  {item.sub}
                </span>
                <span style={{
                  display: "block", marginTop: 12, fontSize: 16,
                  color: "rgba(39,56,82,0.22)", lineHeight: 1, transition: "color 0.18s",
                }}>
                  →
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero-bg.webp')",
              filter: "brightness(0.82) saturate(0.88)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(255,255,255,0.14) 0%, transparent 20%)" }}
          />

          {/* Vertical stats column */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
            style={{
              position: "absolute", top: 36, right: 36,
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(10px)", borderRadius: 8,
              boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
              overflow: "hidden", minWidth: 100,
            }}
          >
            {COL_STATS.map((item, i) => (
              <div
                key={item.lbl}
                style={{
                  padding: "10px 16px",
                  borderBottom: i < COL_STATS.length - 1 ? "1px solid rgba(39,56,82,0.08)" : "none",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: item.small ? 15 : 19,
                  color: "#F07320", lineHeight: 1, fontWeight: 400,
                }}>
                  {item.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 8, fontWeight: 600, letterSpacing: "1.5px",
                  textTransform: "uppercase", color: "#8a9ab0", marginTop: 3,
                }}>
                  {item.lbl}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   EXPORT
════════════════════════════════════════════ */
export default function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
