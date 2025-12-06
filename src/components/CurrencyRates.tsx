import { TrendingUp, TrendingDown } from "lucide-react";

const mockRates = [
  { currency: "USD", name: "Dólar", rate: 4.98, change: 0.5, positive: true },
  { currency: "EUR", name: "Euro", rate: 5.42, change: -0.3, positive: false },
  { currency: "GBP", name: "Libra", rate: 6.31, change: 0.2, positive: true },
  {
    currency: "BTC",
    name: "Bitcoin",
    rate: 230500,
    change: 2.1,
    positive: true,
  },
];

export function CurrencyRates() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Cotações</h3>
      <div className="space-y-3">
        {mockRates.map((rate) => (
          <div
            key={rate.currency}
            className="flex items-center justify-between gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-smooth"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                <span className="font-semibold text-sm">
                  {rate.currency.slice(0, 2)}
                </span>
              </div>
              <div>
                <p className="font-medium">{rate.currency}</p>
                <p className="text-xs text-muted-foreground">{rate.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                R${" "}
                {rate.rate.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="flex items-center justify-end gap-1">
                {rate.positive ? (
                  <TrendingUp className="h-3 w-3 text-success" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span
                  className={`text-xs font-medium ${
                    rate.positive ? "text-success" : "text-destructive"
                  }`}
                >
                  {rate.positive ? "+" : ""}
                  {rate.change}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
