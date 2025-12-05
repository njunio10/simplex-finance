import { Target, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

const mockBudgets = [
  {
    category: "Alimentação",
    limit: 1000,
    spent: 820,
    percentage: 82,
  },
  {
    category: "Transporte",
    limit: 500,
    spent: 380,
    percentage: 76,
  },
  {
    category: "Lazer",
    limit: 300,
    spent: 150,
    percentage: 50,
  },
  {
    category: "Saúde",
    limit: 400,
    spent: 200,
    percentage: 50,
  },
];

const mockGoals = [
  {
    title: "Fundo de Emergência",
    target: 10000,
    current: 6500,
    percentage: 65,
  },
  {
    title: "Viagem de Férias",
    target: 5000,
    current: 2800,
    percentage: 56,
  },
];

export default function Budgets() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orçamentos e Metas</h1>
        <p className="text-muted-foreground">Acompanhe seus gastos e objetivos</p>
      </div>

      {/* Alertas */}
      <Alert className="border-destructive/50 bg-destructive/10">
        <AlertCircle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-destructive">
          Atenção: Você já utilizou 82% do orçamento de Alimentação este mês.
        </AlertDescription>
      </Alert>

      {/* Orçamentos */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Orçamentos Mensais</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mockBudgets.map((budget) => (
            <Card key={budget.category} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">{budget.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    R$ {budget.spent.toFixed(2)} de R$ {budget.limit.toFixed(2)}
                  </span>
                  <span className={budget.percentage > 80 ? "text-destructive font-medium" : "text-muted-foreground"}>
                    {budget.percentage}%
                  </span>
                </div>
                <Progress
                  value={budget.percentage}
                  className="h-2"
                  indicatorClassName={budget.percentage > 80 ? "bg-destructive" : "bg-success"}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Metas */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Metas de Economia</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mockGoals.map((goal) => (
            <Card key={goal.title} className="shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{goal.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    R$ {goal.current.toFixed(2)} de R$ {goal.target.toFixed(2)}
                  </span>
                  <span className="text-primary font-medium">{goal.percentage}%</span>
                </div>
                <Progress value={goal.percentage} className="h-2" indicatorClassName="bg-primary" />
                <p className="text-xs text-muted-foreground">
                  Faltam R$ {(goal.target - goal.current).toFixed(2)} para atingir sua meta
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
