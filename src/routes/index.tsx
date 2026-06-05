import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Search,
  ImageIcon,
  Languages,
  FileSpreadsheet,
  Store,
  ArrowRight,
  Zap,
  Check,
  Play,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProductForge AI — Generate Professional Product Cards with AI" },
      { name: "description", content: "Create SEO-optimized product descriptions, specifications, marketing content and product visuals in seconds." },
      { property: "og:title", content: "ProductForge AI — AI Product Cards for E-commerce" },
      { property: "og:description", content: "Generate SEO product cards, marketing content and AI images for thousands of products in minutes." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Sparkles, title: "AI Product Card Generation", desc: "Automatically create complete product cards from a product name, image or supplier data." },
  { icon: Search, title: "SEO Optimization", desc: "Generate search-friendly titles, descriptions and metadata tuned for conversions." },
  { icon: ImageIcon, title: "AI Product Images", desc: "Create professional product photography backgrounds and promotional visuals." },
  { icon: Languages, title: "Multi-language Support", desc: "Generate localized content in more than 50 languages with native-grade quality." },
  { icon: FileSpreadsheet, title: "Bulk Processing", desc: "Upload CSV, XLSX or supplier catalogs and generate thousands of product cards." },
  { icon: Store, title: "Marketplace Export", desc: "Push directly to Shopify, WooCommerce, Magento, OpenCart and custom stores." },
];

const logos = ["Shopify", "WooCommerce", "Magento", "OpenCart", "Amazon", "eBay"];

function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 glass-strong border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center glow-primary">
              <Zap className="size-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold tracking-tight text-lg">ProductForge<span className="text-primary"> AI</span></span>
          </Link>
          <nav className="ml-10 hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#workflow" className="hover:text-foreground">Workflow</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <Link to="/dashboard" className="hover:text-foreground">Dashboard</Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild><Link to="/dashboard">Sign in</Link></Button>
            <Button variant="hero" size="sm" asChild><Link to="/dashboard">Start Free</Link></Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-mesh">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by 4,200+ e-commerce teams · New: GPT-image-2 support
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Generate Professional <br />
              <span className="text-gradient">Product Cards</span> with AI
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Create SEO-optimized product descriptions, specifications, marketing content and product visuals in seconds — at the scale of your entire catalog.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/dashboard">Start Free <ArrowRight className="size-4" /></Link>
              </Button>
              <Button variant="glass" size="lg"><Play className="size-4" /> Watch Demo</Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Check className="size-3.5 text-primary" /> No credit card · <Check className="size-3.5 text-primary" /> 100 free credits · <Check className="size-3.5 text-primary" /> Cancel anytime
            </div>
          </div>

          {/* Hero product mock */}
          <div className="mt-16 relative max-w-5xl mx-auto animate-fade-up">
            <div className="absolute -inset-x-20 -top-20 h-72 bg-gradient-radial pointer-events-none" />
            <div className="relative glass-strong rounded-2xl shadow-[var(--shadow-elegant)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-warning/70" />
                <span className="size-2.5 rounded-full bg-success/70" />
                <span className="ml-3 text-xs text-muted-foreground">app.productforge.ai/dashboard</span>
              </div>
              <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                <div className="p-6 border-r border-border bg-card/40">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Input</div>
                  <div className="space-y-3">
                    <MockField label="Product" value="Fronius TransTig 230i" />
                    <MockField label="Brand" value="Fronius" />
                    <MockField label="Category" value="Welding Machines" />
                    <MockField label="Audience" value="Industrial workshops" />
                    <Button variant="hero" size="sm" className="w-full mt-2"><Sparkles className="size-3.5" /> Generate</Button>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">AI Output</div>
                    <span className="text-xs text-success">SEO score 96</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-base font-semibold">Fronius TransTig 230i — Pro TIG Welding Inverter</div>
                    <div className="text-sm text-muted-foreground">Pro-grade inverter delivering precision arc control, 60% duty cycle and digital memory for repeatable welds across industrial workshops.</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {["Output 10–230 A", "Duty cycle 60%", "IP23S rated", "3-year warranty"].map((s) => (
                      <div key={s} className="glass rounded-lg px-3 py-2 text-xs"><Check className="inline size-3 mr-1 text-primary" />{s}</div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["welding", "fronius", "industrial", "inverter", "tig"].map((t) => (
                      <span key={t} className="text-xs rounded-full bg-primary/10 text-primary px-2 py-0.5 border border-primary/20">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="mt-16 text-center">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-5">Exports to your stack</div>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-muted-foreground/70">
              {logos.map((l) => (
                <span key={l} className="font-display text-lg tracking-tight">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-wider text-primary mb-3">Platform</div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Everything your catalog team needs</h2>
          <p className="mt-4 text-muted-foreground">Stop writing product descriptions one by one. ProductForge AI automates the end-to-end content pipeline — from supplier feed to marketplace-ready listing.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="group glass rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1">
              <div className="size-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="size-5 text-primary" />
              </div>
              <div className="font-semibold mb-1.5">{f.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary mb-3">Workflow</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">From supplier feed to live listing in minutes</h2>
            <p className="mt-4 text-muted-foreground">Upload a CSV, point us at a supplier, or paste a single product — ProductForge handles the rest.</p>
            <ol className="mt-8 space-y-5">
              {[
                ["Import", "Drop a CSV / XLSX, connect a supplier feed, or describe a single product."],
                ["Generate", "AI writes SEO titles, descriptions, specs, benefits, and marketing copy."],
                ["Visualize", "Create studio-grade product images and lifestyle scenes on demand."],
                ["Export", "One-click publish to Shopify, WooCommerce, Magento, OpenCart or API."],
              ].map(([h, d], i) => (
                <li key={h} className="flex gap-4">
                  <div className="size-9 shrink-0 rounded-lg bg-primary/15 border border-primary/30 text-primary grid place-items-center font-semibold">{i + 1}</div>
                  <div>
                    <div className="font-semibold">{h}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="glass-strong rounded-2xl p-6 shadow-[var(--shadow-elegant)]">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium">Bulk run · supplier_q4.xlsx</div>
              <span className="text-xs text-primary">1,284 products</span>
            </div>
            <div className="space-y-2.5">
              {[
                ["Welding Machines", 412, 100],
                ["Gas Regulators", 286, 96],
                ["Welding Torches", 198, 88],
                ["Electrodes", 342, 74],
                ["Abrasive Tools", 154, 41],
                ["Safety Equipment", 221, 12],
              ].map(([label, count, pct]) => (
                <div key={label as string} className="glass rounded-lg p-3">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium">{label}</span>
                    <span className="text-muted-foreground">{count} · {pct}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["2.1M+", "Products generated"],
            ["54", "Languages supported"],
            ["96%", "Avg. SEO score"],
            ["18×", "Faster than manual"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-display font-semibold text-gradient">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider text-primary mb-3">Pricing</div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Scale your catalog without scaling your team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: "$0", desc: "For testing the platform", features: ["100 AI credits / month", "1 user", "CSV import (100 rows)", "Basic SEO output"], cta: "Start free", featured: false },
            { name: "Growth", price: "$89", desc: "For growing stores", features: ["10,000 AI credits / month", "5 team members", "AI Image Studio", "Marketplace export", "API access"], cta: "Start trial", featured: true },
            { name: "Enterprise", price: "Custom", desc: "For large catalogs", features: ["Unlimited credits", "SSO + audit logs", "Dedicated success", "Custom integrations", "SLA & on-prem"], cta: "Talk to sales", featured: false },
          ].map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 ${p.featured ? "bg-gradient-to-b from-primary/15 to-card border border-primary/30 glow-primary" : "glass"}`}>
              <div className="flex items-center justify-between">
                <div className="font-display font-semibold text-lg">{p.name}</div>
                {p.featured && <span className="text-xs rounded-full bg-primary text-primary-foreground px-2 py-0.5">Popular</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                {p.price.startsWith("$") && p.price !== "$0" && <span className="text-sm text-muted-foreground">/mo</span>}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
              <Button variant={p.featured ? "hero" : "outline"} className="w-full mt-5">{p.cta}</Button>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="size-4 text-primary shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { q: "Cut our listing time from 2 days to 12 minutes per 100 SKUs. The SEO copy converts.", a: "Anna Kovács", r: "Head of Catalog · ForgeTools" },
            { q: "We import 3 supplier feeds weekly and ship straight to Shopify. The team operates 4× leaner.", a: "Marco Rossi", r: "COO · Officina24" },
            { q: "The AI Image Studio replaced our $40k photography budget. Lifestyle scenes look real.", a: "Priya Singh", r: "Brand Lead · NovaSafety" },
          ].map((t) => (
            <div key={t.a} className="glass rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-primary text-primary" />)}</div>
              <p className="text-sm leading-relaxed">"{t.q}"</p>
              <div className="mt-4 text-xs">
                <div className="font-medium">{t.a}</div>
                <div className="text-muted-foreground">{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-mesh opacity-80 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Forge your entire catalog. <span className="text-gradient">Today.</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join 4,200+ e-commerce teams shipping faster with ProductForge AI.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="lg" asChild><Link to="/dashboard">Start Free <ArrowRight className="size-4" /></Link></Button>
              <Button variant="glass" size="lg">Book a demo</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-gradient-to-br from-primary to-primary-glow grid place-items-center"><Zap className="size-3 text-primary-foreground" /></div>
            <span>© 2026 ProductForge AI · All rights reserved</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Status</a>
            <a href="#" className="hover:text-foreground">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MockField({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-lg px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}
