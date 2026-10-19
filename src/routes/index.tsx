import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Crosshair, Gauge, Wrench, Phone, MessageCircle, MapPin } from "lucide-react";
import hero from "@/assets/hero-car.jpg";
import technology from "@/assets/wheel-machine.jpg";
import tread from "@/assets/tyre-tread.jpg";
import logo from "@/assets/links3d-logo.png";
import { BRANDS, BUSINESS, SERVICES, TYRE_SPECIALIST } from "@/lib/business";
import { BrandLogo } from "@/components/site/Shell";
import { useState } from "react";
import gPerf from "@/assets/gallery-performance.jpg";
import gLux from "@/assets/gallery-luxury.jpg";
import gSuv from "@/assets/gallery-suv.jpg";
import gOff from "@/assets/gallery-offroad.jpg";

const GALLERY = [
  { key: "Performance", img: gPerf, title: "Grip at every apex", text: "High-performance tyres for sports cars and fast sedans.", cat: "Sports Car" },
  { key: "Luxury", img: gLux, title: "Quiet, refined comfort", text: "Comfort-focused tyres for luxury sedans.", cat: "Luxury Car" },
  { key: "SUVs", img: gSuv, title: "Confidence on every road", text: "Highway and touring tyres for premium SUVs.", cat: "SUV" },
  { key: "Off-road", img: gOff, title: "Built for the trail", text: "All-terrain and mud tyres for 4x4s.", cat: "4x4 / Off-Road" },
] as const;

function Gallery() {
  const [i, setI] = useState(0);
  const g = GALLERY[i]!;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <p className="eyebrow">Drive Inspiration</p>
      <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">Tyres for every machine</h2>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist">
        {GALLERY.map((x, n) => (
          <button key={x.key} role="tab" aria-selected={n === i} onClick={() => setI(n)} className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${n === i ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"}`}>{x.key}</button>
        ))}
      </div>
      <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[21/9]">
        {GALLERY.map((x, n) => (
          <img key={x.key} src={x.img} alt={`${x.key} vehicle`} loading="lazy" width={1600} height={1008} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${n === i ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="glass-card absolute bottom-3 left-3 right-3 max-w-md rounded-xl p-4 sm:bottom-4 sm:left-4 sm:p-6 md:bottom-8 md:left-8">
          <h3 className="font-display text-xl font-bold sm:text-2xl md:text-3xl">{g.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{g.text}</p>
          <Link to="/tyres" search={{ category: g.cat }} className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">Find {g.key.toLowerCase()} tyres →</Link>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Images are for inspiration only and don't imply any manufacturer partnership.</p>
    </section>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LINKS 3D Wheel Alignment — Premium Tyres & 3D Alignment, Hyderabad" },
      { name: "description", content: `Premium tyres, 3D wheel alignment, balancing, tyre change and nitrogen air at LINKS 3D Wheel Alignment, ${BUSINESS.address}. German Technology. Sunday also open.` },
      { property: "og:title", content: "LINKS 3D Wheel Alignment — Hyderabad" },
      { property: "og:description", content: `Premium tyres and precision 3D wheel alignment at ${BUSINESS.address}.` },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={hero} alt="Black sports car under red studio light" width={1920} height={1088} className="absolute inset-0 h-full w-full animate-drift object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-fade-bottom" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-5 sm:pt-24">
          <p className="eyebrow animate-rise">3D Wheel Alignment · German Technology</p>
          <h1 className="mt-5 max-w-3xl animate-rise text-balance font-display text-4xl font-bold leading-[0.95] sm:text-6xl sm:leading-[0.9] lg:text-8xl">
            <span className="text-metal">Engineered for the road.</span><br />Built for <span className="text-primary">performance.</span>
          </h1>
          <p style={{ animationDelay: "150ms" }} className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground">Premium tyres, precision 3D wheel alignment, expert balancing, and professional tyre care — all in one destination in Hyderabad.</p>
          <div style={{ animationDelay: "300ms" }} className="mt-9 flex animate-rise flex-wrap gap-3">
            <Link to="/tyres" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow hover:opacity-90">Explore Tyres</Link>
            <Link to="/contact" className="glass-card rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider hover:border-foreground">Book a Service</Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-silver">
            <span>◆ 3D Wheel Alignment</span><span>◆ German Technology</span><span>◆ Tyres & Tubes Available</span>
          </div>
        </div>
        <a href="#services" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"><ChevronDown /></a>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24">
        <p className="eyebrow">Our Services</p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold sm:text-5xl md:text-6xl">Everything your wheels need</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="group bg-background p-8 transition-colors hover:bg-graphite">
              <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              {"specialist" in s && s.specialist && <a href={TYRE_SPECIALIST.tel} className="mt-4 block text-sm font-semibold text-primary">{TYRE_SPECIALIST.name} · {TYRE_SPECIALIST.display}</a>}
              <Link to="/contact" search={{ service: s.title }} className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-silver group-hover:text-primary">Enquire Now →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-5 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Cutting-edge technology</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold sm:text-5xl md:text-6xl">Precision is not an option. It's the standard.</h2>
          <div className="mt-6 h-px w-64 overflow-hidden bg-border"><div className="h-full w-1/2 animate-scan bg-primary" /></div>
          <ul className="mt-10 grid max-w-xl gap-5 sm:grid-cols-2">
            {[[Crosshair, "3D wheel alignment"], [Gauge, "Equipment-focused precision"], [Wrench, "Professional tyre care"], [MessageCircle, "Customer-focused service"]].map(([Icon, t]) => {
              const I = Icon as typeof Crosshair;
              return <li key={t as string} className="flex items-center gap-3 text-sm"><I className="h-5 w-5 text-primary" />{t as string}</li>;
            })}
          </ul>
        </div>
        <img src={technology} alt="Workshop machine straightening an alloy wheel" loading="lazy" width={900} height={1200} className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-square" />
      </section>

      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Tyres & Brands</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">Enquire about leading brands</h2>
            </div>
            <Link to="/brands" className="text-sm font-semibold uppercase tracking-widest text-primary">Explore all brands →</Link>
          </div>
        </div>
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...BRANDS, ...BRANDS].map((b, n) => (
              <Link key={n} to="/brands/$slug" params={{ slug: b.slug }} aria-hidden={n >= BRANDS.length} tabIndex={n >= BRANDS.length ? -1 : 0} className="w-52 shrink-0 transition-transform hover:-translate-y-1">
                <BrandLogo brand={b} className="h-24" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <img src={tread} alt="Performance tyre tread close-up" loading="lazy" width={1200} height={1200} className="aspect-square w-full rounded-xl object-cover" />
        <div>
          <p className="eyebrow">Tyre Finder</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold sm:text-5xl md:text-6xl">Find the perfect tyre for your drive</h2>
          <p className="mt-4 text-muted-foreground">Search by vehicle type, tyre size, or brand — then send us an enquiry for current price and availability.</p>
          <div className="mt-8 flex items-center gap-1 font-display text-4xl font-bold"><span>205</span><span className="text-muted-foreground">/</span><span>55</span><span className="text-primary">R16</span></div>
          <p className="mt-2 text-xs text-muted-foreground">Width (mm) / Aspect ratio (%) / Rim diameter (inches)</p>
          <Link to="/tyres" className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Find Your Tyres</Link>
        </div>
      </section>

      <section className="border-t border-border bg-graphite">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <p className="eyebrow">Visit Our Store</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold sm:text-5xl">{BUSINESS.area}</h2>
            <p className="mt-4 text-muted-foreground">{BUSINESS.address}. Sunday also open.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.tel} className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"><Phone className="h-4 w-4" />Call {BUSINESS.phone}</a>
              <a href={TYRE_SPECIALIST.tel} className="flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary"><Phone className="h-4 w-4" />Puncture & tyres · {TYRE_SPECIALIST.display}</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a>
              <a href={BUSINESS.maps} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-foreground"><MapPin className="h-4 w-4" />Directions</a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{TYRE_SPECIALIST.name}, {TYRE_SPECIALIST.role} — wheel puncture and tyre-related services.</p>
          </div>
          <img src={logo} alt="LINKS 3D Wheel Alignment logo" loading="lazy" className="w-full rounded-xl" />
        </div>
      </section>
    </>
  );
}
