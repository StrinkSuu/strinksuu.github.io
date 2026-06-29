import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Phone,
  Calendar,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  Stethoscope,
  Activity,
  Baby,
  HeartHandshake,
  ShieldCheck,
  Microscope,
  Sparkles,
  CalendarCheck,
  Flower2,
  Award,
  Sun,
  Lock,
  Users,
  Quote,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-clinic.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";

const PHONE = "+212539711640";
const PHONE_LABEL = "+212 5 39 71 16 40";
const ADDRESS = "Résidence Mohamed II, Avenue Mohamed V, Tétouan 93000, Morocco";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

/* --- Shared --- */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-container-low)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--apple-blue-deep)]" />
      {children}
    </span>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* --- Hero --- */
export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative overflow-hidden hero-gradient pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -end-24 h-[520px] w-[520px] rounded-full bg-[var(--soft-rose)] opacity-40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -start-32 h-[420px] w-[420px] rounded-full bg-[var(--apple-blue-deep)] opacity-10 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-blur-in">
          <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
          <h1 className="mt-5 whitespace-pre-line text-[clamp(34px,5.4vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--on-surface)]">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(16px,1.6vw,19px)] leading-[1.55] text-[var(--on-surface-variant)]">
            {t("hero.desc")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#appointments"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--apple-blue-deep)] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,102,204,0.6)] transition hover:brightness-110 active:scale-[0.98] min-h-11"
            >
              <Calendar className="h-4 w-4" strokeWidth={2.2} />
              {t("hero.cta.book")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-4 text-[15px] font-semibold text-[var(--on-surface)] ring-1 ring-black/5 backdrop-blur transition hover:bg-white min-h-11"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              {t("hero.cta.call")}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-[13px] text-[var(--on-surface-variant)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 ring-1 ring-black/5">
              <Sparkles className="h-3.5 w-3.5 text-[var(--apple-blue-deep)]" />
              {t("hero.badge")}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Tétouan, Maroc</span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative aspect-[5/6] w-full overflow-hidden rounded-[36px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] ring-1 ring-white/60"
          >
            <img
              src={heroImg}
              alt=""
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </motion.div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -start-4 top-8 hidden rounded-2xl p-3 sm:flex items-center gap-3 sm:start-6"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--soft-rose)] text-[var(--on-surface)]">
              <Baby className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="leading-tight">
              <p className="text-[12px] text-[var(--on-surface-variant)]">Suivi de grossesse</p>
              <p className="text-[13px] font-semibold">3D Ultrasound</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="glass absolute -end-2 bottom-8 hidden sm:flex items-center gap-3 rounded-2xl p-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--apple-blue-deep)]/10 text-[var(--apple-blue-deep)]">
              <ShieldCheck className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="leading-tight">
              <p className="text-[12px] text-[var(--on-surface-variant)]">Confidentiel</p>
              <p className="text-[13px] font-semibold">WCAG AA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --- Trust --- */
export function Trust() {
  const { t } = useI18n();
  const items = [
    { icon: Award, key: "1" },
    { icon: Microscope, key: "2" },
    { icon: HeartHandshake, key: "3" },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[-0.02em]">
              {t("trust.title")}
            </h2>
            <p className="mt-4 text-[17px] leading-[1.55] text-[var(--on-surface-variant)]">
              {t("trust.subtitle")}
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className="card-soft group h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--surface-container-low)] text-[var(--apple-blue-deep)]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.01em]">
                  {t(`trust.${key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--on-surface-variant)]">
                  {t(`trust.${key}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- About / Stats --- */
function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function About() {
  const { t } = useI18n();
  const stats = [
    { value: 22, suffix: "+", key: "about.stat.years" },
    { value: 15000, suffix: "+", key: "about.stat.patients" },
    { value: 40000, suffix: "+", key: "about.stat.consult" },
    { value: 3200, suffix: "+", key: "about.stat.preg" },
  ];
  return (
    <section id="about" className="section-pad bg-[var(--surface-container-low)]">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] ring-1 ring-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
              <img
                src={doctorImg}
                alt="Dr. Fouad Idrissi"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 start-6 hidden sm:flex items-center gap-3 rounded-2xl p-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--soft-rose)]">
                <Stethoscope className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="leading-tight">
                <p className="text-[12px] text-[var(--on-surface-variant)]">Tétouan, Maroc</p>
                <p className="text-[13px] font-semibold">Dr. Fouad Idrissi</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>{t("about.eyebrow")}</Eyebrow>
            <h2 className="mt-4 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em]">
              {t("about.title")}
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-[var(--on-surface-variant)]">
              {t("about.bio")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.key}
                  className="rounded-2xl bg-white p-5 ring-1 ring-black/5"
                >
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--on-surface-variant)]">
                    {t(s.key)}
                  </dt>
                  <dd className="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[var(--on-surface)] sm:text-[34px]">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --- Services --- */
export function Services() {
  const { t } = useI18n();
  const items: { key: string; icon: typeof Baby }[] = [
    { key: "svc.pregnancy", icon: Baby },
    { key: "svc.consult", icon: Stethoscope },
    { key: "svc.ultra", icon: Activity },
    { key: "svc.family", icon: HeartHandshake },
    { key: "svc.highrisk", icon: ShieldCheck },
    { key: "svc.csection", icon: Microscope },
    { key: "svc.women", icon: Flower2 },
    { key: "svc.routine", icon: CalendarCheck },
    { key: "svc.meno", icon: Sun },
  ];
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start gap-4 sm:items-center sm:text-center">
            <Eyebrow>{t("services.eyebrow")}</Eyebrow>
            <h2 className="max-w-2xl text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em]">
              {t("services.title")}
            </h2>
            <p className="max-w-2xl text-[17px] leading-[1.55] text-[var(--on-surface-variant)]">
              {t("services.subtitle")}
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={(i % 3) * 0.06}>
              <article className="card-soft group relative h-full overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                <div aria-hidden className="pointer-events-none absolute -top-12 -end-12 h-40 w-40 rounded-full bg-[var(--soft-rose)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-50" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-[var(--surface-container-low)] text-[var(--apple-blue-deep)]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="relative mt-5 text-[19px] font-semibold tracking-[-0.01em]">
                  {t(key)}
                </h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-[var(--on-surface-variant)]">
                  {t(`${key}.d`)}
                </p>
                <a
                  href="#appointments"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--apple-blue-deep)]"
                >
                  {t("services.learn")}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Appointments --- */
export function Appointments() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const services = [
    "svc.pregnancy",
    "svc.consult",
    "svc.ultra",
    "svc.family",
    "svc.highrisk",
    "svc.women",
    "svc.routine",
    "svc.meno",
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="appointments" className="section-pad bg-[var(--surface-container-low)]">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>{t("appt.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em]">
            {t("appt.title")}
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-[1.55] text-[var(--on-surface-variant)]">
            {t("appt.subtitle")}
          </p>
          <div className="mt-8 space-y-3 text-[14px] text-[var(--on-surface-variant)]">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-black/5">
                <Phone className="h-4 w-4" />
              </span>
              <a href={`tel:${PHONE}`} className="font-medium text-[var(--on-surface)]">
                {PHONE_LABEL}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-black/5">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="leading-[1.5]">{ADDRESS}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="card-soft p-6 sm:p-8 grid gap-4 sm:grid-cols-2"
          >
            <Field label={t("appt.name")} name="name" type="text" autoComplete="name" required />
            <Field label={t("appt.phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
            <Field label={t("appt.email")} name="email" type="email" autoComplete="email" inputMode="email" required />
            <Field label={t("appt.service")} name="service" as="select" required options={services.map((s) => ({ value: s, label: t(s) }))} />
            <Field label={t("appt.date")} name="date" type="date" required />
            <Field label={t("appt.time")} name="time" type="time" required />
            <div className="sm:col-span-2">
              <Field label={t("appt.notes")} name="notes" as="textarea" rows={3} />
            </div>
            <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
              {sent ? (
                <p role="status" className="text-[14px] font-medium text-[var(--apple-blue-deep)]">
                  {t("appt.sent")}
                </p>
              ) : <span />}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--apple-blue-deep)] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,102,204,0.5)] transition hover:brightness-110 active:scale-[0.98] min-h-11"
              >
                <Calendar className="h-4 w-4" strokeWidth={2.2} />
                {t("appt.submit")}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  required,
  rows,
  options,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  required?: boolean;
  rows?: number;
  options?: { value: string; label: string }[];
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text" | "numeric";
}) {
  const id = `f-${name}`;
  const base =
    "peer w-full rounded-2xl bg-[var(--surface-container-low)] px-4 pt-6 pb-2 text-[15px] text-[var(--on-surface)] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[var(--apple-blue-deep)]/30 focus:shadow-[0_0_0_4px_rgba(0,102,204,0.12)] placeholder-transparent min-h-14";
  return (
    <label htmlFor={id} className="relative block">
      {as === "textarea" ? (
        <textarea id={id} name={name} required={required} rows={rows} placeholder={label} className={base} />
      ) : as === "select" ? (
        <select id={id} name={name} required={required} defaultValue="" className={base + " appearance-none pr-10"}>
          <option value="" disabled hidden>
            {label}
          </option>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          placeholder={label}
          className={base}
        />
      )}
      <span className="pointer-events-none absolute start-4 top-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--on-surface-variant)]">
        {label}
      </span>
    </label>
  );
}

/* --- Why Us --- */
export function WhyUs() {
  const { t } = useI18n();
  const items = [
    { icon: Award, key: "1" },
    { icon: HeartHandshake, key: "2" },
    { icon: Activity, key: "3" },
    { icon: Sun, key: "4" },
    { icon: Lock, key: "5" },
    { icon: Users, key: "6" },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <Eyebrow>{t("why.eyebrow")}</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em]">
            {t("why.title")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, key }, i) => (
            <Reveal key={key} delay={(i % 3) * 0.06}>
              <div className="group flex h-full items-start gap-4 rounded-3xl bg-[var(--surface-container-low)] p-6 transition hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[var(--apple-blue-deep)] ring-1 ring-black/5">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{t(`why.${key}`)}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-[var(--on-surface-variant)]">
                    {t(`why.${key}.d`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Testimonials --- */
export function Testimonials() {
  const { t } = useI18n();
  const items = [
    { q: "tst.1", n: "tst.1.name" },
    { q: "tst.2", n: "tst.2.name" },
    { q: "tst.3", n: "tst.3.name" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="section-pad bg-[var(--surface-container-low)]">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
            <Eyebrow>{t("tst.eyebrow")}</Eyebrow>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em]">
              {t("tst.title")}
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="card-soft relative overflow-hidden p-8 sm:p-12">
            <Quote className="absolute end-6 top-6 h-10 w-10 text-[var(--soft-rose)] opacity-70 rtl:scale-x-[-1]" />
            <div className="relative min-h-[160px]">
              {items.map((it, idx) => (
                <motion.figure
                  key={it.q}
                  initial={false}
                  animate={{ opacity: idx === i ? 1 : 0, y: idx === i ? 0 : 8 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`absolute inset-0 ${idx === i ? "pointer-events-auto" : "pointer-events-none"}`}
                >
                  <blockquote className="text-[clamp(20px,2.4vw,26px)] leading-[1.4] tracking-[-0.01em] text-[var(--on-surface)]">
                    “{t(it.q)}”
                  </blockquote>
                  <figcaption className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--on-surface-variant)]">
                    {t(it.n)}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-[var(--on-surface)]" : "w-3 bg-[var(--outline-variant)]"
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- FAQ --- */
export function FAQ() {
  const { t } = useI18n();
  const items = ["1", "2", "3", "4", "5"];
  const [open, setOpen] = useState<string | null>("1");
  return (
    <section id="faq" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <Reveal>
          <Eyebrow>{t("faq.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em]">
            {t("faq.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="divide-y divide-[var(--outline-variant)] border-y border-[var(--outline-variant)]">
            {items.map((k) => {
              const isOpen = open === k;
              return (
                <li key={k}>
                  <button
                    onClick={() => setOpen(isOpen ? null : k)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-start"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] font-semibold tracking-[-0.01em] text-[var(--on-surface)]">
                      {t(`faq.q${k}`)}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--surface-container-low)] text-[var(--on-surface)]"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pe-12 text-[15px] leading-[1.6] text-[var(--on-surface-variant)]">
                      {t(`faq.a${k}`)}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* --- Contact --- */
export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="section-pad bg-[var(--surface-container-low)]">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow>{t("contact.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em]">
            {t("contact.title")}
          </h2>
          <dl className="mt-8 space-y-5">
            <Info icon={MapPin} label={t("contact.address")} value={ADDRESS} />
            <Info icon={Phone} label={t("contact.phone")} value={PHONE_LABEL} href={`tel:${PHONE}`} />
            <Info icon={Clock} label={t("contact.hours")} value={t("contact.hours.v")} />
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--on-surface)] px-5 py-3 text-[14px] font-semibold text-white min-h-11"
            >
              <MapPin className="h-4 w-4" />
              {t("contact.directions")}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-[var(--on-surface)] ring-1 ring-black/5 min-h-11"
            >
              <Phone className="h-4 w-4" />
              {t("contact.call")}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-[36px] ring-1 ring-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
            aria-label={t("contact.directions")}
          >
            <div className="relative aspect-[4/3] w-full">
              <iframe
                title="Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[var(--apple-blue-deep)] ring-1 ring-black/5">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
          {label}
        </dt>
        <dd className="mt-1 whitespace-pre-line text-[16px] leading-[1.5] text-[var(--on-surface)]">
          <Tag {...(href ? { href } : {})} className={href ? "hover:text-[var(--apple-blue-deep)]" : ""}>
            {value}
          </Tag>
        </dd>
      </div>
    </div>
  );
}

/* --- Footer --- */
export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--outline-variant)] bg-white">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--on-surface)] text-white text-[14px] font-semibold">
                FI
              </span>
              <span className="text-[14px] font-semibold tracking-tight">Dr. Fouad Idrissi</span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-[1.55] text-[var(--on-surface-variant)]">
              {t("footer.tag")}
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
              {t("nav.contact")}
            </h4>
            <ul className="mt-4 space-y-2 text-[14px] text-[var(--on-surface)]">
              <li className="leading-[1.5]">{ADDRESS}</li>
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-[var(--apple-blue-deep)]">
                  {PHONE_LABEL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
              {t("footer.quick")}
            </h4>
            <ul className="mt-4 space-y-2 text-[14px]">
              {["nav.about", "nav.services", "nav.appointments", "nav.faq"].map((k) => (
                <li key={k}>
                  <a href={`#${k.split(".")[1]}`} className="text-[var(--on-surface)] hover:text-[var(--apple-blue-deep)]">
                    {t(k)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
              {t("footer.langs")}
            </h4>
            <LangFooter />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--outline-variant)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-[var(--on-surface-variant)]">{t("footer.copy", { year })}</p>
          <a href="#" className="text-[12px] text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]">
            {t("footer.legal")}
          </a>
        </div>
      </div>
    </footer>
  );
}

function LangFooter() {
  const { lang, setLang } = useI18n();
  // dynamic import not needed; use the LANGS list directly
  // but to avoid a circular import we re-declare minimally:
  const langs = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "ar", label: "العربية" },
  ] as const;
  return (
    <ul className="mt-4 space-y-2 text-[14px]">
      {langs.map((l) => (
        <li key={l.code}>
          <button
            onClick={() => setLang(l.code)}
            className={`text-start hover:text-[var(--apple-blue-deep)] ${
              lang === l.code ? "font-semibold text-[var(--apple-blue-deep)]" : "text-[var(--on-surface)]"
            }`}
          >
            {l.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

/* --- Mobile floating CTA --- */
export function MobileCTA() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 lg:hidden transition ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="glass-strong flex items-center gap-2 rounded-full p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
        <a
          href={`tel:${PHONE}`}
          className="grid h-12 w-12 place-items-center rounded-full bg-[var(--surface-container-low)] text-[var(--on-surface)]"
          aria-label={t("contact.call")}
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="#appointments"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[var(--apple-blue-deep)] px-5 text-[15px] font-semibold text-white"
        >
          <Calendar className="h-4 w-4" />
          {t("mobile.book")}
        </a>
      </div>
    </div>
  );
}
