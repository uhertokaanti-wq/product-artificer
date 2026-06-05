import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { sampleProducts } from "@/lib/demo-data";
import { StatusPill } from "./dashboard.index";
import { Upload, FileSpreadsheet, FileText, Plug, Sparkles, ImageIcon, Download, Play } from "lucide-react";

export const Route = createFileRoute("/dashboard/catalog")({
  head: () => ({ meta: [{ title: "Catalog Automation · ProductForge AI" }] }),
  component: CatalogPage,
});

const sources = [
  { icon: FileSpreadsheet, label: "Upload CSV", desc: "Up to 50,000 rows" },
  { icon: FileText, label: "Upload Excel", desc: "XLSX / XLS supported" },
  { icon: Plug, label: "Supplier Feed", desc: "Connect API or FTP" },
];

const jobs = [
  { id: "JOB-2041", name: "supplier_q4.xlsx", products: 1284, done: 924, status: "Running" },
  { id: "JOB-2040", name: "fronius_full_catalog.csv", products: 412, done: 412, status: "Completed" },
  { id: "JOB-2039", name: "esab_electrodes.csv", products: 186, done: 186, status: "Completed" },
  { id: "JOB-2038", name: "safety_gear_supplier.csv", products: 320, done: 0, status: "Queued" },
];

function CatalogPage() {
  return (
    <DashboardLayout
      title="Catalog Automation"
      subtitle="Import supplier feeds and generate thousands of product cards in one run."
      actions={
        <>
          <Button variant="outline" size="sm"><Download className="size-4" /> Export results</Button>
          <Button variant="hero" size="sm"><Sparkles className="size-4" /> New batch run</Button>
        </>
      }
    >
      {/* Import sources */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {sources.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-6 hover:border-primary/40 transition-all cursor-pointer">
            <div className="size-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-3"><s.icon className="size-5 text-primary" /></div>
            <div className="font-semibold">{s.label}</div>
            <div className="text-xs text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Upload zone */}
      <div className="glass-strong rounded-2xl border border-dashed border-primary/30 p-10 text-center mb-8 bg-mesh">
        <div className="size-12 rounded-xl bg-primary/15 grid place-items-center mx-auto mb-3"><Upload className="size-5 text-primary" /></div>
        <div className="text-lg font-semibold">Drop your catalog file here</div>
        <div className="text-sm text-muted-foreground mt-1">CSV, XLSX, or supplier feed URL · Up to 50,000 SKUs per run</div>
        <div className="mt-5 flex justify-center gap-2">
          <Button variant="hero"><Upload className="size-4" /> Browse files</Button>
          <Button variant="outline">Use template</Button>
        </div>
      </div>

      {/* Pipeline options */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3"><Sparkles className="size-4 text-primary" /><div className="font-semibold">Batch AI generation</div></div>
          <p className="text-sm text-muted-foreground mb-4">Generate complete product cards including SEO titles, descriptions, specs, and tags for every row.</p>
          <div className="flex gap-2"><Pill>SEO copy</Pill><Pill>Specs</Pill><Pill>Tags</Pill><Pill>Translations</Pill></div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3"><ImageIcon className="size-4 text-primary" /><div className="font-semibold">Batch image creation</div></div>
          <p className="text-sm text-muted-foreground mb-4">Generate marketplace, lifestyle and social media images for every product in the catalog.</p>
          <div className="flex gap-2"><Pill>Studio</Pill><Pill>Lifestyle</Pill><Pill>Marketplace</Pill></div>
        </div>
      </div>

      {/* Active jobs */}
      <div className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-semibold">Batch runs</div>
            <div className="text-xs text-muted-foreground">All recent automation jobs</div>
          </div>
          <Button variant="ghost" size="sm">View history</Button>
        </div>
        <div className="space-y-3">
          {jobs.map((j) => {
            const pct = Math.round((j.done / j.products) * 100);
            return (
              <div key={j.id} className="glass rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <FileSpreadsheet className="size-4 text-primary" />
                  <div className="font-medium text-sm">{j.name}</div>
                  <div className="text-xs text-muted-foreground">{j.id}</div>
                  <span className={`ml-auto text-xs rounded-full px-2 py-0.5 border ${
                    j.status === "Completed" ? "bg-success/10 text-success border-success/30" :
                    j.status === "Running" ? "bg-primary/15 text-primary border-primary/30" :
                    "bg-muted text-muted-foreground border-border"
                  }`}>{j.status}</span>
                  <Button variant="ghost" size="sm">{j.status === "Queued" ? <><Play className="size-3.5" /> Start</> : "View"}</Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="text-xs text-muted-foreground tabular-nums w-24 text-right">{j.done.toLocaleString()} / {j.products.toLocaleString()}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Results table */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-semibold">Latest results</div>
            <div className="text-xs text-muted-foreground">Generated products ready for export</div>
          </div>
          <Button variant="outline" size="sm"><Download className="size-4" /> Export CSV</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs text-muted-foreground uppercase tracking-wider">
              <tr>
                <th className="text-left px-2 py-2 font-normal">Product</th>
                <th className="text-left px-2 py-2 font-normal">Category</th>
                <th className="text-left px-2 py-2 font-normal">Status</th>
                <th className="text-left px-2 py-2 font-normal">Marketplaces</th>
                <th className="text-left px-2 py-2 font-normal">SEO</th>
                <th className="text-left px-2 py-2 font-normal">Updated</th>
              </tr>
            </thead>
            <tbody>
              {sampleProducts.map((p) => (
                <tr key={p.id} className="border-t border-border/60 hover:bg-accent/30">
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-lg bg-accent/60 grid place-items-center text-base">{p.thumb}</div>
                      <div>
                        <div className="font-medium leading-tight">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-muted-foreground">{p.category}</td>
                  <td className="px-2 py-3"><StatusPill status={p.status} /></td>
                  <td className="px-2 py-3">
                    <div className="flex gap-1.5 flex-wrap">
                      {p.marketplaces.length === 0 && <span className="text-xs text-muted-foreground">—</span>}
                      {p.marketplaces.map((m) => (
                        <span key={m} className="text-xs glass rounded-full px-2 py-0.5">{m}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-2 py-3">{p.score > 0 ? <span className="text-success">{p.score}</span> : <span className="text-muted-foreground">—</span>}</td>
                  <td className="px-2 py-3 text-muted-foreground">{p.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="text-xs glass rounded-full px-2.5 py-1">{children}</span>;
}
