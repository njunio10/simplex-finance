import { Wallet, TrendingUp, TrendingDown, Plus } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { TransactionList } from "@/components/TransactionList";
import { FinancialChart, TrendChart } from "@/components/FinancialChart";
import { CurrencyRates } from "@/components/CurrencyRates";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral das suas finanças</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Transação
        </Button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <DashboardCard
          title="Receitas"
          value="R$ 7.000,00"
          icon={TrendingUp}
          variant="success"
          trend={{ value: "12.5%", positive: true }}
        />
        <DashboardCard
          title="Despesas"
          value="R$ 4.200,00"
          icon={TrendingDown}
          variant="destructive"
          trend={{ value: "8.3%", positive: false }}
        />
        <DashboardCard
          title="Saldo"
          value="R$ 2.800,00"
          icon={Wallet}
          variant="default"
          trend={{ value: "18.2%", positive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="apple-card p-6">
          <FinancialChart />
        </div>
        <div className="apple-card p-6">
          <TrendChart />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 apple-card p-6">
          <TransactionList />
        </div>
        <div className="apple-card p-6">
          <CurrencyRates />
        </div>
      </div>
    </div>
  );
}
