import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: "default" | "success" | "destructive";
}

export function DashboardCard({
  title,
  value,
  icon: Icon,
  trend,
  variant = "default",
}: DashboardCardProps) {
  const iconBg =
    variant === "success"
      ? "bg-success/10 text-success"
      : variant === "destructive"
      ? "bg-destructive/10 text-destructive"
      : "bg-primary/10 text-primary";

  return (
    <div className="apple-card p-6 hover-lift">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-semibold tracking-tight">{value}</p>
          {trend && (
            <div className="flex items-center gap-1.5">
              <span
                className={`text-sm font-medium ${
                  trend.positive ? "text-success" : "text-destructive"
                }`}
              >
                {trend.positive ? "↑" : "↓"} {trend.value}
              </span>
              <span className="text-xs text-muted-foreground">vs mês anterior</span>
            </div>
          )}
        </div>
        <div className={`h-12 w-12 rounded-2xl ${iconBg} flex items-center justify-center`}>
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
