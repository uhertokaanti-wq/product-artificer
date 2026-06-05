import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { sampleProducts, usageTrend, categoryBreakdown, teamActivity } from "@/lib/demo-data";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Sparkles, Download, TrendingUp, ImageIcon, Zap, Package } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({ meta: [{ title: "Dashboard · ProductForge AI" }] }),
  component: DashboardHome,
});

const stats = [
  { label: "Products generated", value: "12,486", delta: "+18.2%", up: true, icon: Package, sub: "this month" },
  { label: "AI credits used", value: "6,824", delta: "68%", up: true, icon: Zap, sub: "of 10,000" },
  { label: "Images created", value: "3,142", delta: "+24%", up: true, icon: ImageIcon, sub: "this month" },
  { label: "Avg. SEO score", value: "94.6", delta: "-1.2", up: false, icon: TrendingUp, sub: "vs last week" },
];

function DashboardHome() {
  return (
    <DashboardLayout
      title="Welcome back, Anna"
      subtitle="Here's what's happening across your workspace today."
      actions={
        <>
          <Button variant="outline" size="sm"><Download className="size-4" /> Export</Button>
          <Button variant="hero" size="sm" asChild><Link to="/dashboard/generator"><Sparkles className="size-4" /> Generate</Link></Button>
        </>
      }
    >
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                <div className="text-2xl md:text-3xl font-display font-semibold mt-2">{s.value}</div>
                <div className={`text-xs mt-2 flex items-center gap-1 ${s.up ? "text-success" : "text-destructive"}`}>
                  {s.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                  {s.delta} <span className="text-muted-foreground">{s.sub}</span>
                </div>
              </div>
              <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center">
                <s.icon className="size-4 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold">Generation activity</div>
              <div className="text-xs text-muted-foreground">Products & images created over the last 7 days</div>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> Products</span>
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-chart-2" /> Images</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={usageTrend}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.19 45)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="oklch(0.72 0.19 45)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" vertical={false} />
              <XAxis dataKey="day" stroke="oklch(0.68 0.02 264)" fontSize={12} axisLine={false} tickLine={false} />
              <YAxis stroke="oklch(0.68 0.02 264)" fontSize={12} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "oklch(0.205 0.014 264)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 }} />
              <Area type="monotone" dataKey="products" stroke="oklch(0.72 0.19 45)" strokeWidth={2} fill="url(#g1)" />
              <Area type="monotone" dataKey="images" stroke="oklch(0.65 0.18 250)" strokeWidth={2} fill="url(#g2)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-1">By category</div>
          <div className="text-xs text-muted-foreground mb-4">Generated products this month</div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={categoryBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" vertical={false} />
              <XAxis dataKey="name" stroke="oklch(0.68 0.02 264)" fontSize={10} axisLine={false} tickLine={false} interval={0} angle={-20} textAnchor="end" height={50} />
              <YAxis stroke="oklch(0.68 0.02 264)" fontSize={12} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "oklch(0.205 0.014 264)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="value" fill="oklch(0.72 0.19 45)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent + Activity */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold">Recent projects</div>
              <div className="text-xs text-muted-foreground">Latest generated product cards</div>
            </div>
            <Button variant="ghost" size="sm" asChild><Link to="/dashboard/catalog">View all</Link></Button>
          </div>
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm">
              <thead className="text-xs text-muted-foreground uppercase tracking-wider">
                <tr>
                  <th className="text-left px-2 py-2 font-normal">Product</th>
                  <th className="text-left px-2 py-2 font-normal">Category</th>
                  <th className="text-left px-2 py-2 font-normal">Status</th>
                  <th className="text-left px-2 py-2 font-normal">SEO</th>
                  <th className="text-left px-2 py-2 font-normal">Updated</th>
                </tr>
              </thead>
              <tbody>
                {sampleProducts.slice(0, 6).map((p) => (
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
                    <td className="px-2 py-3">
                      <StatusPill status={p.status} />
                    </td>
                    <td className="px-2 py-3">
                      {p.score > 0 ? <span className="text-success">{p.score}</span> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="px-2 py-3 text-muted-foreground">{p.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-1">Team activity</div>
          <div className="text-xs text-muted-foreground mb-5">Live workspace events</div>
          <ul className="space-y-4">
            {teamActivity.map((a, i) => (
              <li key={i} className="flex gap-3">
                <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-[10px] font-semibold text-primary-foreground shrink-0">{a.avatar}</div>
                <div className="text-sm">
                  <span className="font-medium">{a.user}</span>{" "}
                  <span className="text-muted-foreground">{a.action}</span>{" "}
                  <span className="text-primary">{a.target}</span>
                  <div className="text-xs text-muted-foreground mt-0.5">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Published: "bg-success/15 text-success border-success/30",
    Draft: "bg-muted text-muted-foreground border-border",
    Generating: "bg-primary/15 text-primary border-primary/30",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs ${map[status] || map.Draft}`}>
      {status === "Generating" && <span className="size-1.5 rounded-full bg-primary animate-pulse" />}
      {status}
    </span>
  );
}
