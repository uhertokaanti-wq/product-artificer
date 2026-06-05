import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Sparkles,
  ImageIcon,
  FileSpreadsheet,
  BarChart3,
  Users,
  Settings,
  Zap,
  Search,
  Bell,
  Plus,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/generator", label: "Product Generator", icon: Sparkles },
  { to: "/dashboard/images", label: "AI Image Studio", icon: ImageIcon },
  { to: "/dashboard/catalog", label: "Catalog Automation", icon: FileSpreadsheet },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dashboard/team", label: "Team Workspace", icon: Users },
];

export function DashboardLayout({ children, title, subtitle, actions }: { children: ReactNode; title: string; subtitle?: string; actions?: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex w-full bg-background bg-mesh">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-sidebar/60 backdrop-blur-xl sticky top-0 h-screen">
        <div className="px-6 py-5 flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center glow-primary">
            <Zap className="size-4 text-primary-foreground" />
          </div>
          <div className="font-display font-semibold tracking-tight">ProductForge</div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <div className="px-3 pb-2 text-xs uppercase tracking-wider text-muted-foreground">Workspace</div>
          {nav.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-primary/15 text-primary border border-primary/20"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}

          <div className="pt-6 px-3 pb-2 text-xs uppercase tracking-wider text-muted-foreground">Account</div>
          <Link to="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent">
            <Settings className="size-4" /> Settings
          </Link>
        </nav>

        <div className="p-4">
          <div className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">AI Credits</div>
              <span className="text-xs text-primary font-semibold">Pro</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[68%] bg-gradient-to-r from-primary to-primary-glow rounded-full" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">6,824 / 10,000 used</div>
            <Button size="sm" variant="hero" className="w-full mt-3">Upgrade</Button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 glass-strong border-b border-border">
          <div className="flex items-center gap-3 px-4 lg:px-8 h-16">
            <Link to="/" className="lg:hidden flex items-center gap-2">
              <div className="size-7 rounded-md bg-gradient-to-br from-primary to-primary-glow grid place-items-center">
                <Zap className="size-3.5 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold">Forge</span>
            </Link>
            <div className="relative flex-1 max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search products, prompts, catalogs…" className="pl-9 bg-card/40 border-border" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon"><Bell className="size-4" /></Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/dashboard/generator"><Plus className="size-4" /> New product</Link>
              </Button>
              <div className="size-9 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-xs font-semibold text-primary-foreground">AK</div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
              {subtitle && <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>}
            </div>
            {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
