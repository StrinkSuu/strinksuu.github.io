import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, ChevronDown, Globe } from "lucide-react";
import { LANGS, useI18n, type Lang } from "@/lib/i18n";

const NAV = [
  { href: "#home", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#services", key: "nav.services" },
  { href: "#appointments", key: "nav.appointments" },
  { href: "#faq", key: "nav.faq" },
  { href: "#contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const currentLang = LANGS.find((l) => l.code === lang)!;

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: scrolled ? 8 : 16,
        paddingBottom: scrolled ? 8 : 16,
      }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 safe-top"
    >
      <div className="container-x">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0)",
            borderColor: scrolled ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0)",
            boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.06)" : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none" }}
          className="flex items-center justify-between gap-4 rounded-full border px-3 py-2 sm:px-5"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 ps-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--on-surface)] text-[var(--surface-container-lowest)] text-[15px] font-semibold tracking-tight">
              FI
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-[13px] font-semibold text-[var(--on-surface)] tracking-tight">
                Dr. Fouad Idrissi
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
                Gynécologie · Obstétrique
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-full px-3 py-2 text-[14px] font-medium text-[var(--on-surface)] transition-colors hover:text-[var(--apple-blue-deep)]"
                >
                  {t(n.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                className="flex items-center gap-1.5 rounded-full bg-[var(--surface-container-low)] px-3 py-2 text-[13px] font-medium text-[var(--on-surface)] transition hover:bg-[var(--surface-container)] min-h-11"
                aria-label={t("lang.title")}
              >
                <Globe className="h-4 w-4" strokeWidth={2} />
                <span className="hidden sm:inline">{currentLang.native}</span>
                <span className="sm:hidden text-base leading-none">{currentLang.flag}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="glass-strong absolute end-0 mt-2 w-44 overflow-hidden rounded-2xl p-1.5 shadow-lg"
                  >
                    {LANGS.map((l) => (
                      <li key={l.code}>
                        <button
                          onMouseDown={(e) => {
                            e.preventDefault();
                            setLang(l.code as Lang);
                            setLangOpen(false);
                          }}
                          className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-[14px] transition hover:bg-[var(--surface-container)] ${
                            l.code === lang ? "font-semibold text-[var(--apple-blue-deep)]" : ""
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-base">{l.flag}</span>
                            {l.native}
                          </span>
                          {l.code === lang && <span className="text-[var(--apple-blue-deep)]">•</span>}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#appointments"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[var(--apple-blue-deep)] px-4 py-2.5 text-[14px] font-semibold text-white transition hover:brightness-110 active:scale-[0.98] min-h-11"
            >
              <Calendar className="h-4 w-4" strokeWidth={2.2} />
              {t("nav.book")}
            </a>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-[var(--surface-container-low)] text-[var(--on-surface)]"
              aria-label={t("nav.menu")}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col gap-6 bg-white p-6 safe-top safe-bottom"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold tracking-tight">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-[var(--surface-container-low)]"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-4 text-[20px] font-semibold tracking-tight text-[var(--on-surface)] transition hover:bg-[var(--surface-container-low)]"
                    >
                      {t(n.key)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-4">
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
                    {t("lang.title")}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code as Lang)}
                        className={`flex items-center gap-2 rounded-2xl px-3 py-3 text-sm transition ${
                          l.code === lang
                            ? "bg-[var(--on-surface)] text-white"
                            : "bg-[var(--surface-container-low)] text-[var(--on-surface)]"
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        {l.native}
                      </button>
                    ))}
                  </div>
                </div>
                <a
                  href="#appointments"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--apple-blue-deep)] px-5 py-4 text-[15px] font-semibold text-white"
                >
                  <Calendar className="h-4 w-4" />
                  {t("nav.book")}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
