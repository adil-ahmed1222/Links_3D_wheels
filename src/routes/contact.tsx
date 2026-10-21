import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PageHero, TyreSpecialistCard } from "@/components/site/Shell";
import { BUSINESS, CATEGORIES, SERVICES, waLink } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string } => (typeof s["service"] === "string" ? { service: s["service"] as string } : {}),
  head: () => ({
    meta: [
      { title: "Book a Service & Contact — LINKS 3D Wheel Alignment Hyderabad" },
      { name: "description", content: `Book wheel alignment, balancing or tyre service at LINKS 3D Wheel Alignment. Call 9393220111, or Mohammed Salman on 7675034429 for wheel puncture and tyre services. ${BUSINESS.address}.` },
      { property: "og:title", content: "Book a Service | LINKS 3D" },
      { property: "og:description", content: `Call, WhatsApp or get directions to LINKS 3D Wheel Alignment, ${BUSINESS.address}.` },
    ],
  }),
  component: Contact,
});

const inp = "min-w-0 w-full rounded-md border border-input bg-background px-3 py-3 text-base focus:border-primary focus:outline-none sm:text-sm";

function Contact() {
  const { service } = Route.useSearch();
  const [f, setF] = useState({ name: "", phone: "", vehicle: "", size: "", service: service ?? SERVICES[0]!.title, date: "", notes: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !/^[6-9]\d{9}$/.test(f.phone.replace(/\D/g, "").slice(-10))) { setErr("Please enter your name and a valid 10-digit mobile number."); return; }
    setErr("");
    const msg = `Hi LINKS 3D, I'd like to book: ${f.service}\nName: ${f.name}\nPhone: ${f.phone}${f.vehicle ? `\nVehicle: ${f.vehicle}` : ""}${f.size ? `\nTyre size: ${f.size}` : ""}${f.date ? `\nPreferred date: ${f.date}` : ""}${f.notes ? `\nNotes: ${f.notes}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <>
      <PageHero eyebrow="Book a Service" title="Let's get you rolling" sub="Fill in your details and we'll open WhatsApp with your request ready to send. Prefer to talk? Just call." />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:gap-12 sm:px-5 sm:py-16 lg:grid-cols-[1.3fr_1fr]">
        <form onSubmit={submit} className="grid min-w-0 gap-4 glass-card rounded-2xl p-4 sm:grid-cols-2 sm:p-7">
          <input className={inp} placeholder="Full name *" value={f.name} onChange={set("name")} maxLength={80} />
          <input className={inp} placeholder="Mobile number *" inputMode="tel" value={f.phone} onChange={set("phone")} maxLength={14} />
          <select className={inp} value={f.vehicle} onChange={set("vehicle")}><option value="">Vehicle type</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>
          <input className={inp} placeholder="Tyre size (e.g. 205/55 R16)" value={f.size} onChange={set("size")} maxLength={20} />
          <select className={inp} value={f.service} onChange={set("service")}>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}</select>
          <input className={inp} type="date" aria-label="Preferred date" value={f.date} onChange={set("date")} min={new Date().toISOString().slice(0, 10)} />
          <textarea className={`${inp} sm:col-span-2`} rows={4} placeholder="Anything else?" value={f.notes} onChange={set("notes")} maxLength={500} />
          {err && <p className="text-sm text-primary sm:col-span-2">{err}</p>}
          <button className="rounded-full bg-primary py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow sm:col-span-2">Send request on WhatsApp</button>
        </form>
        <div className="space-y-6">
          <TyreSpecialistCard />
          <a href={BUSINESS.tel} className="flex items-center gap-4 glass-card rounded-2xl p-5 hover:border-primary"><Phone className="text-primary" /><div><p className="eyebrow">Workshop</p><p className="font-display text-2xl font-bold">{BUSINESS.phone}</p></div></a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 glass-card rounded-2xl p-5 hover:border-primary"><MessageCircle className="text-primary" /><div><p className="eyebrow">WhatsApp</p><p className="font-display text-2xl font-bold">Chat with us</p></div></a>
          <a href={BUSINESS.maps} target="_blank" rel="noreferrer" className="flex items-center gap-4 glass-card rounded-2xl p-5 hover:border-primary"><MapPin className="shrink-0 text-primary" /><div><p className="eyebrow">Get directions</p><p className="text-sm text-muted-foreground">{BUSINESS.address}</p></div></a>
          <p className="text-sm text-muted-foreground">Sunday also open. Please call to confirm timings.</p>
          <iframe title="Map to LINKS 3D Wheel Alignment, Mogal Nagar" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full max-w-full rounded-xl border border-border grayscale sm:h-80" />
        </div>
      </section>
    </>
  );
}
