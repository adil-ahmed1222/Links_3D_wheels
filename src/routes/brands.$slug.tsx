import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BrandLogo } from "@/components/site/Shell";
import { BUSINESS, brandBySlug, PRODUCTS, waLink } from "@/lib/business";

export const Route = createFileRoute("/brands/$slug")({
  loader: ({ params }) => {
    const brand = brandBySlug(params.slug);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.brand.name} Tyres — Enquire at LINKS 3D Hyderabad` },
          { name: "description", content: `${loaderData.brand.desc} Enquire about ${loaderData.brand.name} tyres at LINKS 3D Wheel Alignment, ${BUSINESS.address}.` },
          { property: "og:title", content: `${loaderData.brand.name} Tyres | LINKS 3D` },
          { property: "og:description", content: loaderData.brand.desc },
        ]
      : [{ title: "Brand unavailable | LINKS 3D" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 pb-24 pt-40 text-center"><h1 className="font-display text-4xl font-bold">Brand not found</h1><Link to="/brands" className="mt-6 inline-block text-primary">← All brands</Link></div>
  ),
  component: BrandPage,
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  const products = PRODUCTS.filter((p) => p.brand === brand.name);
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-5 sm:pb-24 sm:pt-36">
      <Link to="/brands" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">← All brands</Link>
      <div className="mt-6 grid items-center gap-8 md:grid-cols-[minmax(0,22rem)_1fr]">
        <BrandLogo brand={brand} className="h-44" />
        <div>
          <p className="eyebrow">{brand.market} · {brand.country}</p>
          <h1 className="mt-2 text-balance font-display text-4xl font-bold sm:text-5xl md:text-6xl">{brand.name}</h1>
          <p className="mt-4 text-muted-foreground">{brand.desc}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">{brand.categories.map((c) => <span key={c} className="glass-card rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider">{c}</span>)}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waLink(`Hi LINKS 3D, I'd like to enquire about ${brand.name} tyres.`)} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Enquire on WhatsApp</a>
            <a href={brand.website} target="_blank" rel="noreferrer" className="glass-card rounded-full px-6 py-3 text-sm font-semibold">Official website ↗</a>
          </div>
        </div>
      </div>
      <h2 className="mt-16 font-display text-3xl font-bold">Example {brand.name} tyres</h2>
      {products.length ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.category}</p>
              <p className="mt-4 font-display text-3xl font-bold">{p.width}/{p.ratio} R{p.rim}</p>
              <p className="text-xs text-muted-foreground">Price & availability on request</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-muted-foreground">Tell us your tyre size and we'll check {brand.name} options for you.</p>
      )}
      <Link to="/tyres" search={{ brand: brand.name }} className="mt-8 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Open in tyre finder →</Link>
    </section>
  );
}
