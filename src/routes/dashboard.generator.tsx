import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateSampleOutput } from "@/lib/demo-data";
import { Sparkles, Upload, Copy, Check, Wand2, FileText, Tag, Globe } from "lucide-react";

export const Route = createFileRoute("/dashboard/generator")({
  head: () => ({ meta: [{ title: "Product Generator · ProductForge AI" }] }),
  component: GeneratorPage,
});

function GeneratorPage() {
  const [form, setForm] = useState({
    name: "Fronius TransTig 230i",
    brand: "Fronius",
    category: "Welding Machines",
    features: "Inverter technology, digital display, lift-TIG, MMA capable",
    audience: "Industrial workshops, professional welders",
    keywords: "TIG welding, inverter, professional, 230A",
  });
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<ReturnType<typeof generateSampleOutput> | null>(generateSampleOutput(form.name, form.brand, form.category));
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(generateSampleOutput(form.name, form.brand, form.category));
      setLoading(false);
    }, 900);
  };

  const copy = (key: string, val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <DashboardLayout title="Product Generator" subtitle="Generate complete SEO product cards from a single brief.">
      <div className="grid lg:grid-cols-[420px_1fr] gap-6">
        {/* Form */}
        <div className="glass rounded-2xl p-6 h-fit lg:sticky lg:top-24">
          <div className="flex items-center gap-2 mb-5">
            <div className="size-8 rounded-lg bg-primary/15 grid place-items-center"><Wand2 className="size-4 text-primary" /></div>
            <div>
              <div className="font-semibold">Brief</div>
              <div className="text-xs text-muted-foreground">Tell the AI about the product</div>
            </div>
          </div>
          <div className="space-y-4">
            <Field label="Product name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Brand" value={form.brand} onChange={(v) => setForm({ ...form, brand: v })} />
              <Field label="Category" value={form.category} onChange={(v) => setForm({ ...form, category: v })} />
            </div>
            <Area label="Product features" value={form.features} onChange={(v) => setForm({ ...form, features: v })} />
            <Field label="Target audience" value={form.audience} onChange={(v) => setForm({ ...form, audience: v })} />
            <Field label="Keywords" value={form.keywords} onChange={(v) => setForm({ ...form, keywords: v })} />

            <div>
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Upload product image</Label>
              <div className="mt-2 rounded-xl border border-dashed border-border bg-accent/30 p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="size-5 mx-auto text-muted-foreground" />
                <div className="text-sm mt-2">Drop image or click to upload</div>
                <div className="text-xs text-muted-foreground">PNG, JPG up to 10MB</div>
              </div>
            </div>

            <Button variant="hero" className="w-full" onClick={handleGenerate} disabled={loading}>
              <Sparkles className="size-4" />
              {loading ? "Generating…" : "Generate Product Card"}
            </Button>
            <div className="text-xs text-center text-muted-foreground">Uses ~12 AI credits</div>
          </div>
        </div>

        {/* Output */}
        <div className="space-y-4 min-w-0">
          {loading && (
            <div className="glass rounded-2xl p-12 grid place-items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center animate-float glow-primary">
                  <Sparkles className="size-5 text-primary-foreground" />
                </div>
                <div className="font-medium">Generating product card…</div>
                <div className="text-xs text-muted-foreground">SEO copy · specs · marketing · tags</div>
              </div>
            </div>
          )}
          {!loading && output && (
            <>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary mb-1">SEO Title</div>
                    <div className="text-xl font-semibold">{output.seoTitle}</div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <ScoreBadge label="SEO" value={96} />
                    <ScoreBadge label="Quality" value={94} />
                  </div>
                </div>
                <CopyBlock onCopy={() => copy("seo", output.seoTitle)} copied={copied === "seo"} />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <OutputCard title="Short Description" icon={FileText} onCopy={() => copy("short", output.shortDescription)} copied={copied === "short"}>
                  <p className="text-sm leading-relaxed">{output.shortDescription}</p>
                </OutputCard>
                <OutputCard title="Marketing Text" icon={Sparkles} onCopy={() => copy("mkt", output.marketing)} copied={copied === "mkt"}>
                  <p className="text-sm leading-relaxed">{output.marketing}</p>
                </OutputCard>
              </div>

              <OutputCard title="Long Description" icon={FileText} onCopy={() => copy("long", output.longDescription)} copied={copied === "long"}>
                <p className="text-sm leading-relaxed">{output.longDescription}</p>
              </OutputCard>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6">
                  <div className="font-semibold mb-3">Technical specifications</div>
                  <div className="divide-y divide-border/60">
                    {output.specs.map((s) => (
                      <div key={s.label} className="flex justify-between py-2 text-sm">
                        <span className="text-muted-foreground">{s.label}</span>
                        <span className="font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="font-semibold mb-3">Key benefits</div>
                  <ul className="space-y-2">
                    {output.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm"><Check className="size-4 text-primary shrink-0 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Globe className="size-4 text-primary" /><div className="font-semibold">Meta tags</div></div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-3">Meta title</div>
                  <div className="text-sm mt-1">{output.metaTitle}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-3">Meta description</div>
                  <div className="text-sm mt-1 text-muted-foreground">{output.metaDescription}</div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3"><Tag className="size-4 text-primary" /><div className="font-semibold">Product tags</div></div>
                  <div className="flex flex-wrap gap-2">
                    {output.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full bg-primary/10 text-primary px-2.5 py-1 border border-primary/20">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-end">
                <Button variant="outline">Save draft</Button>
                <Button variant="outline">Translate</Button>
                <Button variant="hero">Publish to marketplace</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} className="mt-1.5 bg-card/40" />
    </div>
  );
}
function Area({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      <Textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="mt-1.5 bg-card/40" />
    </div>
  );
}
function ScoreBadge({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-right">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold text-success">{value}</div>
    </div>
  );
}
function OutputCard({ title, icon: Icon, children, onCopy, copied }: { title: string; icon: React.ElementType; children: React.ReactNode; onCopy: () => void; copied: boolean }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className="size-4 text-primary" />
          <div className="font-semibold">{title}</div>
        </div>
        <Button variant="ghost" size="sm" onClick={onCopy}>
          {copied ? <><Check className="size-3.5" /> Copied</> : <><Copy className="size-3.5" /> Copy</>}
        </Button>
      </div>
      {children}
    </div>
  );
}
function CopyBlock({ onCopy, copied }: { onCopy: () => void; copied: boolean }) {
  return (
    <Button variant="ghost" size="sm" onClick={onCopy} className="text-muted-foreground">
      {copied ? <><Check className="size-3.5" /> Copied</> : <><Copy className="size-3.5" /> Copy title</>}
    </Button>
  );
}
