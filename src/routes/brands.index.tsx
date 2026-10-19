import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, BrandLogo } from "@/components/site/Shell";
import { BRANDS, waLink } from "@/lib/business";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: [
      { title: "Tyre Brands — MRF, Apollo, Michelin, Pirelli & more | LINKS 3D" },
      { name: "description", content: "Browse Indian and international tyre brands and enquire about tyres at LINKS 3D Wheel Alignment, Hyderabad." },
      { property: "og:title", content: "Tyre Brands | LINKS 3D" },
      { property: "og:description", content: "Indian and international tyre brands — enquire for availability." },
    ],
  }),
  component: Brands,
});

const CATS = ["Car", "SUV", "Performance", "Off-Road", "Two-Wheeler", "Commercial"];
const LABEL: Record<string, string> = { Car: "Passenger car", SUV: "SUV & 4x4" };

function Brands() {
  const [q, setQ] = useState("");
  const [market, setMarket] = useState("");
  const [cat, setCat] = useState("");
  const list = BRANDS.filter((b) => (!q || `${b.name} ${b.country}`.toLowerCase().includes(q.toLowerCase())) && (!market || b.market === market) && (!cat || b.categories.includes(cat)));
  const chip = (on: boolean) => `rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest ${on ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`;

  return (
    <>
      <PageHero eyebrow="Tyres & Brands" title="The brands we can help you find" sub="Indian and international manufacturers. Logos belong to their owners; listing a brand doesn't mean we're an authorised dealer or that it's in stock — enquire for your size." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12">
        <div className="flex flex-wrap items-center gap-2">
          <input placeholder="Search brand or country…" value={q} onChange={(e) => setQ(e.target.value)} className="mr-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm sm:w-64" />
          {["", "Indian", "International"].map((m) => <button key={m} className={chip(market === m)} onClick={() => setMarket(m)}>{m || "All"}</button>)}
          <span className="mx-2 h-5 w-px bg-border" />
          {CATS.map((c) => <button key={c} className={chip(cat === c)} onClick={() => setCat(cat === c ? "" : c)}>{LABEL[c] ?? c}</button>)}
          {(q || market || cat) && <button className="ml-2 text-xs uppercase tracking-widest text-primary" onClick={() => { setQ(""); setMarket(""); setCat(""); }}>Clear</button>}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <article key={b.name} className="glass-card flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/60">
              <BrandLogo brand={b} className="mb-5 h-28" />
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="min-w-0 font-display text-2xl font-bold sm:text-3xl">{b.name}</h3>
                <span className="text-xs text-muted-foreground">{b.country}</span>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{b.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{b.categories.map((c) => <span key={c} className="rounded bg-secondary px-2 py-0.5 text-[0.65rem] uppercase tracking-wider">{c}</span>)}</div>
              <div className="mt-6 flex gap-2">
                <Link to="/brands/$slug" params={{ slug: b.slug }} className="flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold uppercase tracking-wider hover:border-foreground">Explore Brand</Link>
                <a href={waLink(`Hi LINKS 3D, I'd like to enquire about ${b.name} tyres.`)} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-primary py-2 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground">WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 text-center text-muted-foreground">No brands match these filters.</p>}
      </section>
    </>
  );
}
