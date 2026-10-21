const ADDRESS = "13-6-431/C/14/1, Mogal Nagar, Ring Road, beside Madhur Sweets and Crystal Bakery, Hyderabad";
// Beside Madhur Sweets (17.377764, 78.429635) and Crystal Bakery (17.377678, 78.429563) on Ring Road.
const LAT = 17.37772;
const LNG = 78.4296;

export const BUSINESS = {
  name: "LINKS 3D Wheel Alignment",
  phone: "9393220111",
  tel: "tel:9393220111",
  whatsapp: "https://wa.me/919393220111",
  area: "Mogal Nagar, Ring Road",
  address: ADDRESS,
  maps: `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`,
  mapsEmbed: `https://www.google.com/maps?q=${LAT},${LNG}+(${encodeURIComponent("LINKS 3D Wheel Alignment")})&z=18&output=embed`,
};

export function waLink(message: string) {
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const TYRE_SPECIALIST = {
  name: "Mohammed Salman",
  role: "Specialised Technician",
  focus: "Wheel puncture and tyre-related services",
  phone: "7675034429",
  display: "76750 34429",
  tel: "tel:7675034429",
  whatsapp: "https://wa.me/917675034429",
};

export function specialistWaLink(message: string) {
  return `${TYRE_SPECIALIST.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Brand = { name: string; slug: string; country: string; market: "Indian" | "International"; desc: string; categories: string[]; website: string; logo?: string | undefined };

const logoFiles = import.meta.glob<string>("../assets/brands/*.{svg,png}", { eager: true, query: "?url", import: "default" });
const logoFor = (slug: string) =>
  Object.entries(logoFiles).find(([path]) => path.endsWith(`/${slug}.svg`))?.[1]
  ?? Object.entries(logoFiles).find(([path]) => path.endsWith(`/${slug}.png`))?.[1];
const slugify = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

type B = Omit<Brand, "slug" | "logo">;
const RAW: B[] = [
  { name: "MRF", country: "India", market: "Indian", website: "https://www.mrftyres.com", desc: "Chennai-headquartered tyre maker producing tyres for cars, two-wheelers and commercial vehicles.", categories: ["Car", "SUV", "Two-Wheeler", "Commercial"] },
  { name: "Apollo Tyres", country: "India", market: "Indian", website: "https://www.apollotyres.com", desc: "Indian tyre manufacturer with passenger, SUV and truck ranges.", categories: ["Car", "SUV", "Commercial"] },
  { name: "CEAT", country: "India", market: "Indian", website: "https://www.ceat.com", desc: "RPG Group tyre brand covering cars, bikes and commercial vehicles.", categories: ["Car", "SUV", "Two-Wheeler", "Commercial"] },
  { name: "JK Tyre", country: "India", market: "Indian", website: "https://www.jktyre.com", desc: "Indian manufacturer known for radial tyres across segments.", categories: ["Car", "SUV", "Commercial"] },
  { name: "BKT", country: "India", market: "Indian", website: "https://www.bkt-tires.com", desc: "Balkrishna Industries — specialist in off-highway and agricultural tyres.", categories: ["Off-Road", "Commercial"] },
  { name: "TVS Eurogrip", country: "India", market: "Indian", website: "https://www.tvseurogrip.com", desc: "Two-wheeler and three-wheeler tyre brand from TVS Srichakra.", categories: ["Two-Wheeler"] },
  { name: "Birla Tyres", country: "India", market: "Indian", website: "https://www.birlatyres.com", desc: "Indian tyre brand with commercial and passenger offerings.", categories: ["Car", "Commercial"] },
  { name: "Michelin", country: "France", market: "International", website: "https://www.michelin.in", desc: "French tyre maker with car, SUV, performance and two-wheeler ranges; also present in India.", categories: ["Car", "SUV", "Performance", "Two-Wheeler"] },
  { name: "Bridgestone", country: "Japan", market: "International", website: "https://www.bridgestone.co.in", desc: "Japanese tyre manufacturer with operations in India.", categories: ["Car", "SUV", "Performance", "Commercial"] },
  { name: "Goodyear", country: "USA", market: "International", website: "https://www.goodyear.co.in", desc: "American tyre brand with passenger and SUV ranges; present in India.", categories: ["Car", "SUV", "Commercial"] },
  { name: "Continental", country: "Germany", market: "International", website: "https://www.continental-tyres.co.in", desc: "German tyre and automotive company; also available in India.", categories: ["Car", "SUV", "Performance"] },
  { name: "Yokohama", country: "Japan", market: "International", website: "https://www.yokohama-india.com", desc: "Japanese tyre maker known for performance and SUV tyres; present in India.", categories: ["Car", "SUV", "Performance"] },
  { name: "Pirelli", country: "Italy", market: "International", website: "https://www.pirelli.com", desc: "Italian brand focused on premium and high-performance tyres.", categories: ["Performance", "SUV"] },
  { name: "Hankook", country: "South Korea", market: "International", website: "https://www.hankooktire.com", desc: "Korean manufacturer of passenger, SUV and performance tyres.", categories: ["Car", "SUV", "Performance"] },
  { name: "Dunlop", country: "UK", market: "International", website: "https://www.dunlop.eu", desc: "Long-established tyre brand for cars and motorcycles.", categories: ["Car", "Performance", "Two-Wheeler"] },
  { name: "Sumitomo", country: "Japan", market: "International", website: "https://www.srigroup.co.jp", desc: "Japanese rubber company producing passenger and light-truck tyres.", categories: ["Car", "SUV"] },
  { name: "Giti Tire", country: "Singapore", market: "International", website: "https://www.giti.com", desc: "Singapore-based tyre group with passenger and commercial ranges.", categories: ["Car", "Commercial"] },
  { name: "Toyo Tires", country: "Japan", market: "International", website: "https://www.toyotires.com", desc: "Japanese brand known for SUV and off-road tyres.", categories: ["SUV", "Off-Road", "Performance"] },
  { name: "BFGoodrich", country: "USA", market: "International", website: "https://www.bfgoodrichtires.com", desc: "Michelin group brand renowned for all-terrain tyres.", categories: ["Off-Road", "SUV"] },
  { name: "Kumho Tire", country: "South Korea", market: "International", website: "https://www.kumhotire.com", desc: "Korean tyre maker with passenger and SUV ranges.", categories: ["Car", "SUV"] },
  { name: "Nexen Tire", country: "South Korea", market: "International", website: "https://www.nexentire.com", desc: "Korean brand offering passenger and SUV tyres.", categories: ["Car", "SUV"] },
  { name: "Vredestein", country: "Netherlands", market: "International", website: "https://www.vredestein.com", desc: "Dutch-origin premium tyre brand, part of Apollo Tyres.", categories: ["Car", "SUV", "Performance"] },
  { name: "Maxxis", country: "Taiwan", market: "International", website: "https://www.maxxis.com", desc: "Taiwanese brand with car, SUV and two-wheeler tyres.", categories: ["Car", "SUV", "Two-Wheeler", "Off-Road"] },
  { name: "Falken", country: "Japan", market: "International", website: "https://www.falkentyre.com", desc: "Sumitomo Rubber brand focused on performance and SUV tyres.", categories: ["Performance", "SUV"] },
  { name: "Firestone", country: "USA", market: "International", website: "https://www.firestone.com", desc: "Bridgestone group brand with passenger and commercial tyres.", categories: ["Car", "Commercial"] },
];

export const BRANDS: Brand[] = RAW.map((b) => { const slug = slugify(b.name); return { ...b, slug, logo: logoFor(slug) }; });
export const brandBySlug = (slug: string) => BRANDS.find((b) => b.slug === slug);

export type Product = { id: string; brand: string; name: string; category: string; width: number; ratio: number; rim: number };

// Representative catalogue for enquiry only — no live price or stock is shown.
export const PRODUCTS: Product[] = [
  { id: "1", brand: "MRF", name: "ZLX", category: "Hatchback", width: 165, ratio: 80, rim: 14 },
  { id: "2", brand: "MRF", name: "Wanderer Street", category: "SUV", width: 235, ratio: 65, rim: 17 },
  { id: "3", brand: "Apollo Tyres", name: "Alnac 4G", category: "Sedan", width: 205, ratio: 55, rim: 16 },
  { id: "4", brand: "Apollo Tyres", name: "Apterra AT2", category: "4x4 / Off-Road", width: 265, ratio: 65, rim: 17 },
  { id: "5", brand: "CEAT", name: "SecuraDrive", category: "Sedan", width: 195, ratio: 55, rim: 16 },
  { id: "6", brand: "CEAT", name: "Zoom Rad X1", category: "Motorcycle / Scooter", width: 110, ratio: 70, rim: 17 },
  { id: "7", brand: "JK Tyre", name: "UX Royale", category: "Hatchback", width: 185, ratio: 65, rim: 15 },
  { id: "8", brand: "Michelin", name: "Pilot Sport 4", category: "Sports Car", width: 225, ratio: 45, rim: 18 },
  { id: "9", brand: "Michelin", name: "Primacy 4", category: "Sedan", width: 205, ratio: 55, rim: 16 },
  { id: "10", brand: "Bridgestone", name: "Turanza T005", category: "Luxury Car", width: 225, ratio: 50, rim: 17 },
  { id: "11", brand: "Bridgestone", name: "Dueler H/T", category: "SUV", width: 265, ratio: 65, rim: 17 },
  { id: "12", brand: "Goodyear", name: "Assurance TripleMax", category: "Hatchback", width: 185, ratio: 60, rim: 15 },
  { id: "13", brand: "Continental", name: "UltraContact UC6", category: "Electric Vehicle", width: 215, ratio: 60, rim: 16 },
  { id: "14", brand: "Yokohama", name: "Geolandar A/T", category: "4x4 / Off-Road", width: 265, ratio: 70, rim: 16 },
  { id: "15", brand: "Pirelli", name: "P Zero", category: "Sports Car", width: 245, ratio: 40, rim: 19 },
  { id: "16", brand: "Hankook", name: "Ventus S1 evo3", category: "Luxury Car", width: 245, ratio: 45, rim: 18 },
  { id: "17", brand: "BFGoodrich", name: "All-Terrain T/A KO2", category: "4x4 / Off-Road", width: 265, ratio: 65, rim: 17 },
  { id: "18", brand: "Toyo Tires", name: "Open Country A/T III", category: "SUV", width: 235, ratio: 60, rim: 18 },
  { id: "19", brand: "Apollo Tyres", name: "EnduRace", category: "Commercial Vehicle", width: 215, ratio: 75, rim: 16 },
  { id: "20", brand: "TVS Eurogrip", name: "Protorq", category: "Motorcycle / Scooter", width: 100, ratio: 80, rim: 17 },
];

export const CATEGORIES = ["Hatchback", "Sedan", "SUV", "Luxury Car", "Sports Car", "4x4 / Off-Road", "Electric Vehicle", "Commercial Vehicle", "Motorcycle / Scooter"];

export const SERVICES = [
  { title: "3D Wheel Alignment", desc: "Alignment checked and corrected to your vehicle's specifications using 3D alignment equipment.", when: "After hitting a pothole, uneven tyre wear, or the car pulling to one side." },
  { title: "Wheel Balancing", desc: "Helps reduce vibration and promotes a smoother drive.", when: "Steering vibration at speed, or when new tyres are fitted." },
  { title: "Tyre Changing", desc: "Professional tyre removal and installation with suitable equipment.", when: "Worn, damaged or upgraded tyres.", specialist: true },
  { title: "Nitrogen Air", desc: "Nitrogen inflation for those who prefer it. Correct pressure and regular checks still matter.", when: "Any visit — ask at the counter." },
  { title: "Wheel Repair", desc: "Wheel repair for bent or damaged wheels.", when: "A bent wheel, a damaged rim, or after a kerb or pothole hit." },
  { title: "Alloy Wheel Repair and Throw", desc: "Alloy wheel repair and throw, checked and corrected so the wheel runs true.", when: "Vibration, a wobbling alloy wheel, or after a kerb or pothole hit." },
  { title: "Tyres & Tubes", desc: "All types of tyres and tubes for different vehicles, subject to availability.", when: "Enquire with your tyre size.", specialist: true },
];
