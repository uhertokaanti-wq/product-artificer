import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { teamMembers, teamActivity } from "@/lib/demo-data";
import { UserPlus, Key, Shield, Activity, Copy, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/team")({
  head: () => ({ meta: [{ title: "Team Workspace · ProductForge AI" }] }),
  component: TeamPage,
});

const roles = [
  { name: "Owner", desc: "Full access including billing and workspace deletion", count: 1, color: "text-primary border-primary/30 bg-primary/10" },
  { name: "Admin", desc: "Manage members, billing and integrations", count: 1, color: "text-chart-2 border-chart-2/30 bg-chart-2/10" },
  { name: "Editor", desc: "Generate and edit product cards, run batches", count: 2, color: "text-success border-success/30 bg-success/10" },
  { name: "Viewer", desc: "Read-only access to projects and analytics", count: 1, color: "text-muted-foreground border-border bg-muted" },
];

function TeamPage() {
  const [showKey, setShowKey] = useState(false);
  return (
    <DashboardLayout
      title="Team Workspace"
      subtitle="Manage members, roles, shared projects and API access."
      actions={<Button variant="hero" size="sm"><UserPlus className="size-4" /> Invite member</Button>}
    >
      {/* Roles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {roles.map((r) => (
          <div key={r.name} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className={`text-xs rounded-full px-2 py-0.5 border ${r.color}`}>{r.name}</span>
              <span className="text-2xl font-display font-semibold">{r.count}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        {/* Members */}
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold">Members</div>
              <div className="text-xs text-muted-foreground">5 of 10 seats used</div>
            </div>
            <Input placeholder="Search members…" className="w-48 bg-card/40" />
          </div>
          <div className="space-y-2">
            {teamMembers.map((m) => (
              <div key={m.email} className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/30 transition-colors">
                <div className="size-9 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-xs font-semibold text-primary-foreground">{m.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{m.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{m.email}</div>
                </div>
                <span className="text-xs glass rounded-full px-2 py-0.5">{m.role}</span>
                <span className={`text-xs rounded-full px-2 py-0.5 border ${m.status === "Active" ? "bg-success/10 text-success border-success/30" : "bg-warning/10 text-warning border-warning/30"}`}>{m.status}</span>
                <Button variant="ghost" size="sm">Manage</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Shared projects */}
        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-1">Shared projects</div>
          <div className="text-xs text-muted-foreground mb-4">Workspaces your team contributes to</div>
          <ul className="space-y-3">
            {[
              { name: "Q4 Welding Launch", members: 5, products: 412 },
              { name: "Safety Equipment 2026", members: 3, products: 221 },
              { name: "Supplier Migration", members: 4, products: 1284 },
              { name: "Holiday Promo Catalog", members: 2, products: 86 },
            ].map((p) => (
              <li key={p.name} className="glass rounded-xl p-3">
                <div className="font-medium text-sm">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.members} members · {p.products} products</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* API */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-1"><Key className="size-4 text-primary" /><div className="font-semibold">API access</div></div>
          <div className="text-xs text-muted-foreground mb-4">Use the ProductForge API to integrate with your stack.</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Production key</div>
          <div className="flex gap-2">
            <div className="flex-1 glass rounded-lg px-3 py-2 text-sm font-mono truncate">
              {showKey ? "pf_live_4f8a92b7c1d3e5f6a8b2c4d6e8f0a1b3" : "pf_live_•••••••••••••••••••••••••••••"}
            </div>
            <Button variant="outline" size="icon" onClick={() => setShowKey(!showKey)}>{showKey ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</Button>
            <Button variant="outline" size="icon"><Copy className="size-4" /></Button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="size-3.5" /> Last rotated 14 days ago · <a className="text-primary hover:underline" href="#">Rotate</a>
          </div>
          <div className="mt-5 glass rounded-lg p-3 text-xs font-mono">
            <span className="text-muted-foreground">$</span> curl -H "Authorization: Bearer $PF_KEY" \<br />
            &nbsp;&nbsp;https://api.productforge.ai/v1/products/generate
          </div>
        </div>

        {/* Activity logs */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4"><Activity className="size-4 text-primary" /><div className="font-semibold">Activity logs</div></div>
          <ul className="space-y-4">
            {teamActivity.map((a, i) => (
              <li key={i} className="flex gap-3">
                <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-[10px] font-semibold text-primary-foreground shrink-0">{a.avatar}</div>
                <div className="text-sm flex-1">
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
