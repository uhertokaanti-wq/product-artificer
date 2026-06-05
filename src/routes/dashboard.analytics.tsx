import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { usageTrend, categoryBreakdown } from "@/lib/demo-data";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
  RadialBar, RadialBarChart, PolarAngleAxis, Line, LineChart, Cell, Pie, PieChart, Legend,
} from "recharts";
import { TrendingUp, DollarSign, Award, Store } from "lucide-react";

export const Route = createFileRoute("/dashboard/analytics")({
  head: () => ({ meta: [{ title: "Analytics · ProductForge AI" }] }),
  component: AnalyticsPage,
});

const metrics = [
  { label: "Products Generated", value: "12,486", delta: "+18.2%", icon: TrendingUp },
  { label: "AI Cost Savings", value: "$48,210", delta: "+22.4%", icon: DollarSign },
  { label: "Avg. SEO Score", value: "94.6", delta: "+1.8", icon: Award },
  { label: "Marketplace Reach", value: "6", delta: "channels", icon: Store },
];

const marketplacePerf = [
  { name: "Shopify", value: 4820 },
  { name: "WooCommerce", value: 3210 },
  { name: "Magento", value: 1840 },
  { name: "OpenCart", value: 980 },
  { name: "Amazon", value: 1240 },
  { name: "Custom", value: 396 },
];

const quality = [{ name: "Quality", value: 92, fill: "oklch(0.72 0.19 45)" }];
const colors = ["oklch(0.72 0.19 45)", "oklch(0.65 0.18 250)", "oklch(0.72 0.17 155)", "oklch(0.78 0.16 80)", "oklch(0.65 0.2 320)", "oklch(0.6 0.15 200)"];

const seoTrend = [
  { week: "W1", score: 86 },
  { week: "W2", score: 89 },
  { week: "W3", score: 91 },
  { week: "W4", score: 92 },
  { week: "W5", score: 93 },
  { week: "W6", score: 94 },
  { week: "W7", score: 94.6 },
];

function AnalyticsPage() {
  return (
    <DashboardLayout title="Analytics" subtitle="Track content quality, AI usage and marketplace performance.">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m) => (
          <div key={m.label} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</div>
              <m.icon className="size-4 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-display font-semibold mt-3">{m.value}</div>
            <div className="text-xs text-success mt-1">{m.delta}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold">Generation volume</div>
              <div className="text-xs text-muted-foreground">Trailing 7 days</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={usageTrend}>
              <defs>
                <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.19 45)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="oklch(0.72 0.19 45)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" vertical={false} />
              <XAxis dataKey="day" stroke="oklch(0.68 0.02 264)" fontSize={12} axisLine={false} tickLine={false} />
              <YAxis stroke="oklch(0.68 0.02 264)" fontSize={12} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "oklch(0.205 0.014 264)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 }} />
              <Area type="monotone" dataKey="products" stroke="oklch(0.72 0.19 45)" strokeWidth={2} fill="url(#ag)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-1">Content quality score</div>
          <div className="text-xs text-muted-foreground mb-3">Across all generated cards</div>
          <ResponsiveContainer width="100%" height={240}>
            <RadialBarChart innerRadius="65%" outerRadius="100%" data={quality} startAngle={210} endAngle={-30}>
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar dataKey="value" cornerRadius={20} background={{ fill: "oklch(0.24 0.015 264)" }} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="-mt-32 text-center pointer-events-none">
            <div className="text-4xl font-display font-semibold text-gradient">92</div>
            <div className="text-xs text-muted-foreground mt-1">out of 100</div>
          </div>
          <div className="h-20" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-3">Marketplace distribution</div>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={marketplacePerf} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={2}>
                {marketplacePerf.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "oklch(0.205 0.014 264)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="font-semibold mb-1">SEO score trend</div>
          <div className="text-xs text-muted-foreground mb-3">Weekly average across catalog</div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={seoTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" vertical={false} />
              <XAxis dataKey="week" stroke="oklch(0.68 0.02 264)" fontSize={12} axisLine={false} tickLine={false} />
              <YAxis domain={[80, 100]} stroke="oklch(0.68 0.02 264)" fontSize={12} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "oklch(0.205 0.014 264)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 }} />
              <Line type="monotone" dataKey="score" stroke="oklch(0.72 0.19 45)" strokeWidth={3} dot={{ fill: "oklch(0.72 0.19 45)", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <div className="font-semibold mb-4">Performance by category</div>
        <div className="space-y-3">
          {categoryBreakdown.map((c, i) => {
            const pct = Math.round((c.value / 412) * 100);
            return (
              <div key={c.name} className="flex items-center gap-4">
                <div className="w-40 text-sm">{c.name}</div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${Math.min(pct, 100)}%`, background: colors[i % colors.length] }} />
                </div>
                <div className="text-sm tabular-nums text-muted-foreground w-16 text-right">{c.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
