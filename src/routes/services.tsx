import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, TyreSpecialistCard } from "@/components/site/Shell";
import { BUSINESS, SERVICES, TYRE_SPECIALIST } from "@/lib/business";
import alignment from "@/assets/alignment.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — 3D Wheel Alignment, Balancing, Nitrogen | LINKS 3D" },
      { name: "description", content: `3D wheel alignment, wheel balancing, tyre changing, nitrogen air, rim throw, alloy wheel throw, and tyres & tubes at LINKS 3D Wheel Alignment, ${BUSINESS.address}.` },
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
      <img src={alignment} alt="3D wheel alignment in progress" width={1600} height={1008} className="h-52 w-full object-cover sm:h-80 md:h-[28rem]" />
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-5 sm:pt-16">
        <TyreSpecialistCard />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-border bg-graphite/40 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-3xl font-bold text-primary sm:text-4xl">{String(i + 1).padStart(2, "0")}</span>
                <Link to="/contact" search={{ service: s.title }} className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground sm:text-sm">Book</Link>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground sm:text-base">{s.desc}</p>
              <p className="mt-3 text-sm"><span className="text-silver">When you may need it:</span> <span className="text-muted-foreground">{s.when}</span></p>
              {"specialist" in s && s.specialist && (
                <a href={TYRE_SPECIALIST.tel} className="mt-4 text-sm font-semibold text-primary">
                  {TYRE_SPECIALIST.name}, {TYRE_SPECIALIST.role} · {TYRE_SPECIALIST.display}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
