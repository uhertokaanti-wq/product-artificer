import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sampleImages, samplePrompts } from "@/lib/demo-data";
import { Sparkles, ImageIcon, Wand2, Download, Heart, Layers, Box, Camera, Megaphone } from "lucide-react";

export const Route = createFileRoute("/dashboard/images")({
  head: () => ({ meta: [{ title: "AI Image Studio · ProductForge AI" }] }),
  component: ImagesPage,
});

const tools = [
  { id: "bg", label: "Background", icon: Layers, desc: "Replace or remove product backgrounds" },
  { id: "lifestyle", label: "Lifestyle Scene", icon: Camera, desc: "Place products in realistic environments" },
  { id: "enhance", label: "Enhancement", icon: Wand2, desc: "Upscale, denoise, color correct" },
  { id: "marketplace", label: "Marketplace", icon: Box, desc: "Amazon / eBay ready white-bg shots" },
  { id: "social", label: "Social Banner", icon: Megaphone, desc: "Branded promo visuals" },
];

function ImagesPage() {
  const [tool, setTool] = useState("lifestyle");
  const [prompt, setPrompt] = useState("Industrial welding equipment in modern workshop");
  const [loading, setLoading] = useState(false);

  const onGenerate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1100);
  };

  return (
    <DashboardLayout
      title="AI Image Studio"
      subtitle="Studio-grade product imagery without the studio."
      actions={<Button variant="outline" size="sm"><Download className="size-4" /> Download all</Button>}
    >
      <div className="grid lg:grid-cols-[320px_1fr] gap-6">
        {/* Tools */}
        <div className="space-y-2">
          {tools.map((t) => {
            const active = tool === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTool(t.id)}
                className={`w-full text-left rounded-xl p-4 border transition-all ${active ? "border-primary/40 bg-primary/10" : "border-border bg-card/40 hover:border-primary/20"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`size-9 rounded-lg grid place-items-center ${active ? "bg-primary text-primary-foreground" : "bg-accent/60 text-primary"}`}>
                    <t.icon className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.label}</div>
                    <div className="text-xs text-muted-foreground">{t.desc}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="space-y-6 min-w-0">
          {/* Prompt panel */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="size-4 text-primary" />
              <div className="font-semibold capitalize">{tools.find(t => t.id === tool)?.label} generator</div>
            </div>
            <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3} placeholder="Describe the scene…" className="bg-card/40" />
            <div className="mt-3 flex flex-wrap gap-2">
              {samplePrompts.map((p) => (
                <button key={p} onClick={() => setPrompt(p)} className="text-xs glass rounded-full px-3 py-1 hover:border-primary/40">
                  {p}
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 items-center">
              <Button variant="hero" onClick={onGenerate} disabled={loading}>
                <Sparkles className="size-4" /> {loading ? "Generating…" : "Generate 4 images"}
              </Button>
              <div className="flex gap-2 text-xs text-muted-foreground items-center">
                <Pill>1024×1024</Pill><Pill>High quality</Pill><Pill>Auto background</Pill>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">Generated gallery</div>
              <div className="text-xs text-muted-foreground">{sampleImages.length} images</div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {loading &&
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl glass animate-pulse" />
                ))}
              {sampleImages.map((img) => (
                <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden glass">
                  <div
                    className="absolute inset-0 grid place-items-center text-6xl"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, oklch(0.72 0.19 ${20 + img.id * 18} / 0.35), oklch(0.22 0.02 264) 70%)`,
                    }}
                  >
                    <span className="opacity-80">{img.emoji}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs line-clamp-2">{img.prompt}</div>
                    <div className="text-[10px] text-muted-foreground mt-1">{img.style}</div>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="glass" className="size-7"><Heart className="size-3" /></Button>
                    <Button size="icon" variant="glass" className="size-7"><Download className="size-3" /></Button>
                  </div>
                  <div className="absolute top-2 left-2 text-[10px] glass rounded-full px-2 py-0.5">{img.style}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="glass rounded-full px-2.5 py-1">{children}</span>;
}
