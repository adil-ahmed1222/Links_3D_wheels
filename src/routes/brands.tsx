import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Shell";
import { BRANDS, waLink } from "@/lib/business";

export const Route = createFileRoute("/brands")({
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

function Brands() {
  const [q, setQ] = useState("");
  const [market, setMarket] = useState("");
  const [cat, setCat] = useState("");
  const list = BRANDS.filter((b) => (!q || `${b.name} ${b.country}`.toLowerCase().includes(q.toLowerCase())) && (!market || b.market === market) && (!cat || b.categories.includes(cat)));
  const chip = (on: boolean) => `rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest ${on ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`;

  return (
    <>
      <PageHero eyebrow="Tyres & Brands" title="The brands we can help you find" sub="Indian and international manufacturers. Availability varies — enquire for your size." />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-wrap items-center gap-2">
          <input placeholder="Search brand or country…" value={q} onChange={(e) => setQ(e.target.value)} className="mr-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm sm:w-64" />
          {["", "Indian", "International"].map((m) => <button key={m} className={chip(market === m)} onClick={() => setMarket(m)}>{m || "All"}</button>)}
          <span className="mx-2 h-5 w-px bg-border" />
          {CATS.map((c) => <button key={c} className={chip(cat === c)} onClick={() => setCat(cat === c ? "" : c)}>{c}</button>)}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <article key={b.name} className="flex flex-col rounded-xl border border-border bg-graphite p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
              <div className="flex items-start justify-between">
                <h3 className="font-display text-3xl font-bold">{b.name}</h3>
                <span className="text-xs text-muted-foreground">{b.country}</span>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{b.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{b.categories.map((c) => <span key={c} className="rounded bg-secondary px-2 py-0.5 text-[0.65rem] uppercase tracking-wider">{c}</span>)}</div>
              <div className="mt-6 flex gap-2">
                <Link to="/tyres" className="flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold uppercase tracking-wider hover:border-foreground">Explore</Link>
                <a href={waLink(`Hi LINKS 3D, I'd like to enquire about ${b.name} tyres.`)} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-primary py-2 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground">Enquire</a>
              </div>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 text-center text-muted-foreground">No brands match these filters.</p>}
      </section>
    </>
  );
}
