import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Shell";
import { SERVICES } from "@/lib/business";
import alignment from "@/assets/alignment.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — 3D Wheel Alignment, Balancing, Nitrogen | LINKS 3D" },
      { name: "description", content: "3D wheel alignment, wheel balancing, tyre changing, nitrogen air, rim throw, and tyres & tubes in Moghal Nagar, Hyderabad." },
      { property: "og:title", content: "Services | LINKS 3D Wheel Alignment" },
      { property: "og:description", content: "Alignment, balancing, tyre change and nitrogen air in Hyderabad." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Professional wheel & tyre care" />
      <img src={alignment} alt="3D wheel alignment in progress" width={1600} height={1008} className="h-80 w-full object-cover md:h-[28rem]" />
      <section className="mx-auto max-w-5xl divide-y divide-border px-5 py-16">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="grid gap-4 py-10 md:grid-cols-[6rem_1fr_auto] md:items-start">
            <span className="font-display text-5xl font-bold text-primary">0{i + 1}</span>
            <div>
              <h2 className="font-display text-3xl font-bold">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <p className="mt-3 text-sm"><span className="text-silver">When you may need it:</span> <span className="text-muted-foreground">{s.when}</span></p>
            </div>
            <Link to="/contact" search={{ service: s.title }} className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground">Book</Link>
          </div>
        ))}
      </section>
    </>
  );
}
