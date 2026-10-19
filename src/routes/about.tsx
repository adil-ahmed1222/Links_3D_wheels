import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/links3d-logo.png";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LINKS 3D Wheel Alignment — Attapur, Hyderabad" },
      { name: "description", content: `About LINKS 3D Wheel Alignment, a tyre and wheel service workshop at ${BUSINESS.address}. FAQs on alignment, balancing and tyres.` },
      { property: "og:title", content: "About LINKS 3D Wheel Alignment" },
      { property: "og:description", content: `Tyre and wheel services at LINKS 3D Wheel Alignment, ${BUSINESS.address}.` },
    ],
  }),
  component: About,
});

const FAQ: [string, string][] = [
  ["What is 3D wheel alignment?", "A method that uses cameras and wheel-mounted targets to measure wheel angles, so they can be adjusted to your vehicle manufacturer's specifications."],
  ["When should I check my wheel alignment?", "If the car pulls to one side, the steering wheel is off-centre, tyres wear unevenly, after hitting a pothole, or when fitting new tyres."],
  ["What does wheel balancing do?", "It evens out weight around the wheel and tyre to help reduce vibration at speed."],
  ["How can I identify my tyre size?", "Look at the tyre sidewall — e.g. 205/55 R16 — or the sticker on the driver's door frame or your owner's manual."],
  ["Which tyre brands can I enquire about?", "Indian and international brands such as MRF, Apollo, CEAT, JK Tyre, Michelin, Bridgestone, Pirelli and more. See the Brands page."],
  ["Do you provide nitrogen air?", "Yes, nitrogen air is available."],
  ["Are tyres available for SUVs and luxury cars?", "All types of tyres and tubes are available, subject to stock. Send us your size to confirm."],
  ["How do I book a service?", "Use the Book a Service page, call 9393220111, or message us on WhatsApp."],
  ["Who do I call for a wheel puncture or tyre service?", "Call Mohammed Salman, Specialised Technician, on 7675034429. He handles wheel puncture and tyre-related services."],
  ["Are you open on Sundays?", "Yes — Sunday also open. Please call to confirm timings."],
  ["How can I get directions?", `We're at ${BUSINESS.address}. Tap 'Directions' on the Contact page.`],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="LINKS 3D Wheel Alignment" />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-2">
        <div className="space-y-5 text-lg text-muted-foreground">
          <p>LINKS 3D Wheel Alignment provides tyre-related products and automotive wheel services at {BUSINESS.address}.</p>
          <p>Our services include 3D wheel alignment, wheel balancing, tyre changing, nitrogen air, and tyre and tube enquiries. We aim to help drivers find suitable tyre solutions and professional service for their vehicles.</p>
          <Link to="/contact" className="inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Visit or contact us</Link>
        </div>
        <img src={logo} alt="LINKS 3D Wheel Alignment — German Technology" className="w-full rounded-xl" />
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 font-display text-5xl font-bold">Questions, answered</h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map(([q, a]) => (
            <AccordionItem key={q} value={q}><AccordionTrigger className="text-left text-base">{q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{a}</AccordionContent></AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
