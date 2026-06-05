export const sampleProducts = [
  { id: "PRD-1042", name: "Fronius TransTig 230i Welding Machine", category: "Welding Machines", status: "Published", score: 96, marketplaces: ["Shopify", "Amazon"], updated: "2h ago", thumb: "🔥" },
  { id: "PRD-1041", name: "GCE Argon Gas Regulator Pro", category: "Gas Regulators", status: "Draft", score: 88, marketplaces: ["WooCommerce"], updated: "4h ago", thumb: "🧪" },
  { id: "PRD-1040", name: "Binzel MB 25 AK Welding Torch", category: "Welding Torches", status: "Published", score: 94, marketplaces: ["Shopify"], updated: "6h ago", thumb: "🛠️" },
  { id: "PRD-1039", name: "ESAB OK 48.00 Electrodes 3.2mm", category: "Electrodes", status: "Published", score: 91, marketplaces: ["Magento", "Amazon"], updated: "1d ago", thumb: "⚡" },
  { id: "PRD-1038", name: "3M Cubitron II Abrasive Disc", category: "Abrasive Tools", status: "Generating", score: 0, marketplaces: [], updated: "now", thumb: "🌀" },
  { id: "PRD-1037", name: "Optrel Crystal 2.0 Welding Helmet", category: "Safety Equipment", status: "Published", score: 99, marketplaces: ["Shopify", "OpenCart"], updated: "2d ago", thumb: "🪖" },
  { id: "PRD-1036", name: "Lincoln Electric Bester 215 MMA", category: "Welding Machines", status: "Published", score: 93, marketplaces: ["WooCommerce"], updated: "3d ago", thumb: "🔥" },
  { id: "PRD-1035", name: "Cebora Pocket Pulse 1635 MIG", category: "Welding Machines", status: "Draft", score: 86, marketplaces: [], updated: "3d ago", thumb: "🔥" },
];

export const usageTrend = [
  { day: "Mon", products: 142, images: 86 },
  { day: "Tue", products: 198, images: 124 },
  { day: "Wed", products: 176, images: 102 },
  { day: "Thu", products: 245, images: 168 },
  { day: "Fri", products: 312, images: 204 },
  { day: "Sat", products: 188, images: 122 },
  { day: "Sun", products: 226, images: 158 },
];

export const categoryBreakdown = [
  { name: "Welding Machines", value: 412 },
  { name: "Gas Regulators", value: 286 },
  { name: "Torches", value: 198 },
  { name: "Electrodes", value: 342 },
  { name: "Abrasives", value: 154 },
  { name: "Safety", value: 221 },
];

export const teamActivity = [
  { user: "Anna Kovács", action: "generated 24 product cards", target: "Welding Machines", time: "12 min ago", avatar: "AK" },
  { user: "Marco Rossi", action: "exported catalog to", target: "Shopify", time: "38 min ago", avatar: "MR" },
  { user: "Priya Singh", action: "created AI images for", target: "Safety Equipment", time: "1h ago", avatar: "PS" },
  { user: "Lukas Weber", action: "invited 3 teammates", target: "Workspace", time: "2h ago", avatar: "LW" },
  { user: "Sofia Costa", action: "imported CSV catalog", target: "supplier_q4.xlsx", time: "5h ago", avatar: "SC" },
];

export const teamMembers = [
  { name: "Anna Kovács", email: "anna@forge.ai", role: "Owner", status: "Active", avatar: "AK" },
  { name: "Marco Rossi", email: "marco@forge.ai", role: "Admin", status: "Active", avatar: "MR" },
  { name: "Priya Singh", email: "priya@forge.ai", role: "Editor", status: "Active", avatar: "PS" },
  { name: "Lukas Weber", email: "lukas@forge.ai", role: "Editor", status: "Invited", avatar: "LW" },
  { name: "Sofia Costa", email: "sofia@forge.ai", role: "Viewer", status: "Active", avatar: "SC" },
];

export const samplePrompts = [
  "Industrial welding equipment in modern workshop",
  "Premium product photography on white background",
  "Amazon marketplace product image",
  "Lifestyle scene of construction worker using power tool",
  "Black gradient studio backdrop, dramatic lighting",
  "Social media banner: bold orange gradient with product hero",
];

export const sampleImages = [
  { id: 1, prompt: "Industrial welding equipment in modern workshop", style: "Lifestyle", emoji: "🏭" },
  { id: 2, prompt: "Premium product photography on white background", style: "Studio", emoji: "📸" },
  { id: 3, prompt: "Amazon marketplace product image", style: "Marketplace", emoji: "🛒" },
  { id: 4, prompt: "Welding torch with sparks, dark backdrop", style: "Dramatic", emoji: "✨" },
  { id: 5, prompt: "Gas regulator on workshop bench", style: "Lifestyle", emoji: "🔧" },
  { id: 6, prompt: "Safety helmet hero shot", style: "Hero", emoji: "🪖" },
  { id: 7, prompt: "Abrasive disc spinning macro", style: "Macro", emoji: "🌀" },
  { id: 8, prompt: "Social banner: tools collection", style: "Banner", emoji: "🎨" },
];

export function generateSampleOutput(name: string, brand: string, category: string) {
  const n = name || "Industrial Welding Machine 230A";
  const b = brand || "ProForge";
  const c = category || "Welding Machines";
  return {
    seoTitle: `${b} ${n} — Professional ${c} for Industrial Workshops`,
    shortDescription: `The ${b} ${n} delivers precision, reliability and pro-grade performance for demanding workshop environments. Engineered for daily heavy use.`,
    longDescription: `Built for professionals, the ${b} ${n} combines premium components with intelligent control electronics. Optimized arc stability, intuitive interface and energy-efficient inverter technology make it the ideal choice for both fabrication shops and on-site work. Compatible with the full ${b} accessory line and backed by a 3-year warranty.`,
    specs: [
      { label: "Output current", value: "10 – 230 A" },
      { label: "Duty cycle", value: "60% @ 200 A" },
      { label: "Input voltage", value: "230 V / 50 Hz" },
      { label: "Weight", value: "11.4 kg" },
      { label: "Protection class", value: "IP23S" },
    ],
    benefits: [
      "Stable arc across the full power range",
      "Lightweight inverter design for portability",
      "Compatible with MMA, TIG and Lift-TIG modes",
      "Energy efficient — up to 30% less consumption",
    ],
    marketing: `Upgrade your workshop with the ${b} ${n} — the pro-grade ${c.toLowerCase()} trusted by 12,000+ welders worldwide. Limited launch offer.`,
    metaTitle: `${b} ${n} | Pro ${c} | Forge Store`,
    metaDescription: `Buy the ${b} ${n} — precision ${c.toLowerCase()}, 3-year warranty, fast EU shipping. Order today.`,
    tags: ["welding", b.toLowerCase(), "industrial", "inverter", "professional", c.toLowerCase().replace(/\s+/g, "-")],
  };
}
