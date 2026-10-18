import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Crosshair, Gauge, Wrench, Phone, MessageCircle, MapPin } from "lucide-react";
import hero from "@/assets/hero-car.jpg";
import alignment from "@/assets/alignment.jpg";
import tread from "@/assets/tyre-tread.jpg";
import logo from "@/assets/links3d-logo.png.asset.json";
import { BRANDS, BUSINESS, SERVICES } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LINKS 3D Wheel Alignment — Premium Tyres & 3D Alignment, Hyderabad" },
      { name: "description", content: "Premium tyres, 3D wheel alignment, balancing, tyre change and nitrogen air in Moghal Nagar, Ring Road, Hyderabad. German Technology. Sunday also open." },
      { property: "og:title", content: "LINKS 3D Wheel Alignment — Hyderabad" },
      { property: "og:description", content: "Premium tyres and precision 3D wheel alignment in Moghal Nagar, Hyderabad." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={hero} alt="Black sports car under red studio light" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-fade-bottom" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24">
          <p className="eyebrow animate-rise">3D Wheel Alignment · German Technology</p>
          <h1 className="mt-5 max-w-3xl animate-rise font-display text-6xl font-bold leading-[0.9] md:text-8xl">
            <span className="text-metal">Engineered for the road.</span><br />Built for <span className="text-primary">performance.</span>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground">Premium tyres, precision 3D wheel alignment, expert balancing, and professional tyre care — all in one destination in Hyderabad.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/tyres" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow hover:opacity-90">Explore Tyres</Link>
            <Link to="/contact" className="rounded-full border border-silver/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider hover:border-foreground">Book a Service</Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-silver">
            <span>◆ 3D Wheel Alignment</span><span>◆ German Technology</span><span>◆ Tyres & Tubes Available</span>
          </div>
        </div>
        <a href="#services" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"><ChevronDown /></a>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <p className="eyebrow">Our Services</p>
        <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">Everything your wheels need</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="group bg-background p-8 transition-colors hover:bg-graphite">
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <Link to="/contact" search={{ service: s.title }} className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-silver group-hover:text-primary">Enquire Now →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={alignment} alt="Car on a 3D wheel alignment lift with targets" loading="lazy" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-32">
          <p className="eyebrow">German Technology</p>
          <h2 className="mt-3 max-w-2xl font-display text-5xl font-bold md:text-7xl">Precision is not an option. It's the standard.</h2>
          <div className="mt-6 h-px w-64 overflow-hidden bg-border"><div className="h-full w-1/2 animate-scan bg-primary" /></div>
          <ul className="mt-10 grid max-w-xl gap-5 sm:grid-cols-2">
            {[[Crosshair, "3D wheel alignment"], [Gauge, "Equipment-focused precision"], [Wrench, "Professional tyre care"], [MessageCircle, "Customer-focused service"]].map(([Icon, t]) => {
              const I = Icon as typeof Crosshair;
              return <li key={t as string} className="flex items-center gap-3 text-sm"><I className="h-5 w-5 text-primary" />{t as string}</li>;
            })}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-24 text-paper-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Tyres & Brands</p>
              <h2 className="mt-3 font-display text-5xl font-bold">Enquire about leading brands</h2>
            </div>
            <Link to="/brands" className="text-sm font-semibold uppercase tracking-widest text-primary">All brands →</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-paper-foreground/10 bg-paper-foreground/10 sm:grid-cols-4 lg:grid-cols-7">
            {BRANDS.slice(0, 14).map((b) => (
              <div key={b.name} className="flex h-24 items-center justify-center bg-paper px-3 text-center font-display text-xl font-bold uppercase tracking-wide">{b.name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <img src={tread} alt="Performance tyre tread close-up" loading="lazy" width={1200} height={1200} className="aspect-square w-full rounded-xl object-cover" />
        <div>
          <p className="eyebrow">Tyre Finder</p>
          <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">Find the perfect tyre for your drive</h2>
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
            <h2 className="mt-3 font-display text-5xl font-bold">Moghal Nagar, Ring Road</h2>
            <p className="mt-4 text-muted-foreground">{BUSINESS.address}. Sunday also open.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.tel} className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"><Phone className="h-4 w-4" />Call {BUSINESS.phone}</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a>
              <a href={BUSINESS.maps} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-foreground"><MapPin className="h-4 w-4" />Directions</a>
            </div>
          </div>
          <img src={logo.url} alt="LINKS 3D Wheel Alignment logo" loading="lazy" className="w-full rounded-xl" />
        </div>
      </section>
    </>
  );
}
