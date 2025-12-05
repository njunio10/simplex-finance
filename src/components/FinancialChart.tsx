import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";

const mockData = [
  { month: "Jan", receitas: 5800, despesas: 3200 },
  { month: "Fev", receitas: 5500, despesas: 3800 },
  { month: "Mar", receitas: 6200, despesas: 3500 },
  { month: "Abr", receitas: 5900, despesas: 4100 },
  { month: "Mai", receitas: 6500, despesas: 3900 },
  { month: "Jun", receitas: 7000, despesas: 4200 },
];

export function FinancialChart() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Receitas vs Despesas</h3>
      <ChartContainer
        config={{
          receitas: { label: "Receitas", color: "hsl(var(--success))" },
          despesas: { label: "Despesas", color: "hsl(var(--destructive))" },
        }}
        className="w-full"
      >
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={mockData} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <ChartTooltip cursor={{ fill: "hsl(var(--muted))", opacity: 0.35 }} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="receitas" name="Receitas" fill="var(--color-receitas)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="despesas" name="Despesas" fill="var(--color-despesas)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

export function TrendChart() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Evolução Mensal</h3>
      <ChartContainer
        config={{
          receitas: { label: "Receitas", color: "hsl(var(--success))" },
          despesas: { label: "Despesas", color: "hsl(var(--destructive))" },
        }}
        className="w-full"
      >
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <ChartTooltip cursor={{ stroke: "hsl(var(--border))" }} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              type="monotone"
              dataKey="receitas"
              name="Receitas"
              stroke="var(--color-receitas)"
              strokeWidth={2.5}
              dot={{ fill: "var(--color-receitas)", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="despesas"
              name="Despesas"
              stroke="var(--color-despesas)"
              strokeWidth={2.5}
              dot={{ fill: "var(--color-despesas)", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
