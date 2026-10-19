import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/links3d-logo.png";
import { BUSINESS } from "@/lib/business";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/tyres", label: "Find Tyres" },
  { to: "/brands", label: "Brands" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ className = "h-12" }: { className?: string }) {
  return <img src={logo} alt="LINKS 3D Wheel Alignment — German Technology" className={`${className} w-auto max-w-full object-contain`} />;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 z-50 px-3 transition-all duration-300 ${scrolled ? "top-2" : "top-3 sm:top-4"}`}>
      <div className={`glass-card mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl px-3 transition-all duration-300 sm:px-4 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"}`}>
        <Link to="/" aria-label="LINKS 3D home" className="min-w-0 shrink rounded-md focus-visible:outline-2 focus-visible:outline-primary"><Logo className={scrolled ? "h-9 max-w-[8.5rem] sm:h-11 sm:max-w-[11rem]" : "h-11 max-w-[9.5rem] sm:h-14 sm:max-w-[13rem]"} /></Link>
        <nav className="hidden min-w-0 items-center gap-4 xl:flex 2xl:gap-7">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground 2xl:text-xs 2xl:tracking-[0.16em]" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a href={BUSINESS.tel} aria-label="Call" className="rounded-full border border-border p-2.5 hover:border-primary"><Phone className="h-4 w-4" /></a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full border border-border p-2.5 hover:border-primary"><MessageCircle className="h-4 w-4" /></a>
          <Link to="/contact" className="rounded-full bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-glow hover:opacity-90 2xl:px-5 2xl:text-sm">Book a Service</Link>
        </div>
        <button className="shrink-0 rounded-full p-2 xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="glass-card mx-auto mt-2 max-h-[calc(100svh-6rem)] max-w-7xl animate-rise overflow-y-auto rounded-2xl px-5 pb-6 xl:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-display text-xl font-semibold uppercase">{n.label}</Link>
          ))}
          <div className="mt-5 grid grid-cols-1 gap-2 min-[380px]:grid-cols-3">
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded-md border border-border py-3 text-center text-sm font-semibold">Book</Link>
            <a href={BUSINESS.tel} className="rounded-md border border-border py-3 text-center text-sm font-semibold">Call Now</a>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="rounded-md bg-primary py-3 text-center text-sm font-semibold text-primary-foreground">WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-3">
        <div className="min-w-0">
          <Logo className="h-16 max-w-[14rem] sm:h-24" />
          <p className="mt-4 text-sm text-muted-foreground">Precision in every rotation. Sunday also open.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow">Visit</p>
          <a href={BUSINESS.maps} target="_blank" rel="noreferrer" className="flex gap-2 text-muted-foreground hover:text-foreground"><MapPin className="h-4 w-4 shrink-0" />{BUSINESS.address}</a>
          <a href={BUSINESS.tel} className="flex gap-2 text-muted-foreground hover:text-foreground"><Phone className="h-4 w-4" />{BUSINESS.phone}</a>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="eyebrow col-span-2">Explore</p>
          {NAV.map((n) => <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">{n.label}</Link>)}
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} LINKS 3D Wheel Alignment, Hyderabad. Brand names belong to their respective owners.</p>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [gone, setGone] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("l3d-loaded")) { setHidden(true); return; }
    let p = 0;
    const t = setInterval(() => { p = Math.min(p + 12, 90); setProgress(p); }, 90);
    const finish = () => { clearInterval(t); setProgress(100); setTimeout(() => setGone(true), 250); setTimeout(() => setHidden(true), 900); sessionStorage.setItem("l3d-loaded", "1"); };
    if (document.readyState === "complete") setTimeout(finish, 700); else window.addEventListener("load", finish, { once: true });
    const safety = setTimeout(finish, 3500);
    return () => { clearInterval(t); clearTimeout(safety); window.removeEventListener("load", finish); };
  }, []);
  if (hidden) return null;
  return (
    <div aria-hidden className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian transition-opacity duration-700 ${gone ? "pointer-events-none opacity-0" : ""}`}>
      <svg viewBox="0 0 100 100" className="h-24 w-24 animate-wheel text-silver">
        <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="6 4" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
        {[0, 72, 144, 216, 288].map((a) => <line key={a} x1="50" y1="50" x2="50" y2="22" stroke="currentColor" strokeWidth="3" transform={`rotate(${a} 50 50)`} />)}
        <circle cx="50" cy="50" r="6" className="fill-primary" />
      </svg>
      <p className="mt-8 font-display text-4xl font-bold tracking-wider"><span className="text-metal">LINKS</span> <span className="text-primary">3D</span></p>
      <div className="mt-5 h-0.5 w-48 overflow-hidden bg-border"><div className="h-full bg-primary transition-all duration-200" style={{ width: `${progress}%` }} /></div>
      <p className="mt-4 text-[0.65rem] tracking-[0.4em] text-muted-foreground">PRECISION IN EVERY ROTATION</p>
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-10 pt-28 sm:pb-14 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-3 animate-rise text-balance font-display text-4xl font-bold sm:text-5xl md:text-6xl xl:text-7xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl animate-rise text-sm text-muted-foreground sm:text-base">{sub}</p>}
      </div>
    </section>
  );
}

export function BrandLogo({ brand, className = "h-20" }: { brand: { name: string; logo?: string | undefined }; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-lg bg-paper px-4 py-3 ${className}`}>
      {brand.logo ? (
        <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="font-display text-xl font-bold uppercase tracking-tight text-paper-foreground">{brand.name}</span>
      )}
    </div>
  );
}
