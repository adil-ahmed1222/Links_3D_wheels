import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/Shell";
import { CATEGORIES, PRODUCTS, waLink } from "@/lib/business";

export const Route = createFileRoute("/tyres")({
  validateSearch: (s: Record<string, unknown>): { brand?: string; category?: string } => ({ ...(typeof s["brand"] === "string" ? { brand: s["brand"] as string } : {}), ...(typeof s["category"] === "string" ? { category: s["category"] as string } : {}) }),
  head: () => ({
    meta: [
      { title: "Tyre Finder — Search by Size & Vehicle | LINKS 3D Hyderabad" },
      { name: "description", content: "Find car, SUV, 4x4, EV and two-wheeler tyres by size, vehicle type and brand. Enquire for price and availability at LINKS 3D, Hyderabad." },
      { property: "og:title", content: "Tyre Finder | LINKS 3D" },
      { property: "og:description", content: "Search tyres by size, vehicle and brand, then enquire on WhatsApp." },
    ],
  }),
  component: Tyres,
});

const uniq = (a: number[]) => [...new Set(a)].sort((x, y) => x - y);
const sel = "min-w-0 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base sm:text-sm";

function Tyres() {
  const sp = Route.useSearch();
  const [f, setF] = useState({ category: sp.category ?? "", width: "", ratio: "", rim: "", brand: sp.brand ?? "", q: "" });
  const [sort, setSort] = useState("name");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => setF({ ...f, [k]: e.target.value });

  const list = useMemo(() => {
    const r = PRODUCTS.filter((p) =>
      (!f.category || p.category === f.category) && (!f.width || p.width === +f.width) && (!f.ratio || p.ratio === +f.ratio) &&
      (!f.rim || p.rim === +f.rim) && (!f.brand || p.brand === f.brand) &&
      (!f.q || `${p.brand} ${p.name}`.toLowerCase().includes(f.q.toLowerCase())));
    return [...r].sort((a, b) => sort === "brand" ? a.brand.localeCompare(b.brand) : sort === "size" ? a.rim - b.rim || a.width - b.width : a.name.localeCompare(b.name));
  }, [f, sort]);

  const size = f.width && f.ratio && f.rim ? `${f.width}/${f.ratio} R${f.rim}` : "";

  return (
    <>
      <PageHero eyebrow="Tyre Finder" title="Find the perfect tyre for your drive" sub="Filter by vehicle and size. Prices and stock change often — send an enquiry and we'll confirm current availability." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12">
        <div className="grid gap-3 glass-card rounded-2xl p-5 md:grid-cols-4 lg:grid-cols-7">
          <select aria-label="Vehicle category" className={sel} value={f.category} onChange={set("category")}><option value="">All vehicles</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>
          <select aria-label="Width" className={sel} value={f.width} onChange={set("width")}><option value="">Width</option>{uniq(PRODUCTS.map((p) => p.width)).map((v) => <option key={v}>{v}</option>)}</select>
          <select aria-label="Aspect ratio" className={sel} value={f.ratio} onChange={set("ratio")}><option value="">Ratio</option>{uniq(PRODUCTS.map((p) => p.ratio)).map((v) => <option key={v}>{v}</option>)}</select>
          <select aria-label="Rim" className={sel} value={f.rim} onChange={set("rim")}><option value="">Rim</option>{uniq(PRODUCTS.map((p) => p.rim)).map((v) => <option key={v}>{v}</option>)}</select>
          <select aria-label="Brand" className={sel} value={f.brand} onChange={set("brand")}><option value="">All brands</option>{[...new Set(PRODUCTS.map((p) => p.brand))].sort().map((b) => <option key={b}>{b}</option>)}</select>
          <input aria-label="Search" placeholder="Search…" className={sel} value={f.q} onChange={set("q")} />
          <select aria-label="Sort" className={sel} value={sort} onChange={(e) => setSort(e.target.value)}><option value="name">Sort: Name</option><option value="brand">Sort: Brand</option><option value="size">Sort: Size</option></select>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>{list.length} tyres</span>
          <button onClick={() => setF({ category: "", width: "", ratio: "", rim: "", brand: "", q: "" })} className="uppercase tracking-widest hover:text-primary">Clear filters</button>
        </div>

        {list.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-border p-12 text-center">
            <p className="font-display text-3xl font-bold">No match listed</p>
            <p className="mt-2 text-muted-foreground">We stock all types of tyres & tubes — ask us directly.</p>
            <a href={waLink(`Hi LINKS 3D, I'm looking for tyres${size ? ` in size ${size}` : ""}${f.category ? ` for my ${f.category}` : ""}.`)} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Enquire on WhatsApp</a>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((p) => {
              const s = `${p.width}/${p.ratio} R${p.rim}`;
              return (
                <article key={p.id} className="glass-card flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/60">
                  <p className="eyebrow">{p.brand}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
                  <p className="mt-5 font-display text-3xl font-bold">{s}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Price & availability on request</p>
                  <a href={waLink(`Hi LINKS 3D, please share price & availability for ${p.brand} ${p.name} ${s}.`)} target="_blank" rel="noreferrer" className="mt-6 rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground">Enquire</a>
                </article>
              );
            })}
          </div>
        )}
        <p className="mt-10 text-xs text-muted-foreground">Always verify the tyre size specified by your vehicle manufacturer (door jamb sticker or owner's manual) before purchasing. Listings are representative examples, not live stock.</p>
      </section>
    </>
  );
}
