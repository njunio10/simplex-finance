import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const currencies = [
  { code: "BRL", name: "Real Brasileiro", rate: 1 },
  { code: "USD", name: "Dólar Americano", rate: 5.12 },
  { code: "EUR", name: "Euro", rate: 5.45 },
  { code: "GBP", name: "Libra Esterlina", rate: 6.28 },
  { code: "JPY", name: "Iene Japonês", rate: 0.038 },
  { code: "ARS", name: "Peso Argentino", rate: 0.0054 },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<string>("BRL");
  const [toCurrency, setToCurrency] = useState<string>("USD");

  const getRate = (code: string) => {
    return currencies.find((c) => c.code === code)?.rate || 1;
  };

  const calculateConversion = () => {
    const amountNum = parseFloat(amount) || 0;
    const fromRate = getRate(fromCurrency);
    const toRate = getRate(toCurrency);

    // Convert to BRL first, then to target currency
    const inBRL = fromCurrency === "BRL" ? amountNum : amountNum / fromRate;
    const result = toCurrency === "BRL" ? inBRL : inBRL * toRate;

    return result;
  };

  const getExchangeRate = () => {
    const fromRate = getRate(fromCurrency);
    const toRate = getRate(toCurrency);

    if (fromCurrency === "BRL") {
      return toRate;
    } else if (toCurrency === "BRL") {
      return 1 / fromRate;
    } else {
      return toRate / fromRate;
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Conversão de Moedas</h1>
        <p className="text-muted-foreground">
          Converta valores entre diferentes moedas
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 ">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
            <CardTitle>Conversor</CardTitle>
            <Button variant="outline" onClick={swapCurrencies}>
              <ArrowRightLeft className="h-4 w-4" />
              Inverter
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Converter Stack with centered swap button */}
            <div className="relative py-2">
              {/* From Currency */}
              <div className="space-y-2">
                <Label>De</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                  />
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Swap Button - perfectly centered between sections */}
              {/* <Button
                variant="outline"
                size="icon"
                onClick={swapCurrencies}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
              >
                <ArrowRightLeft className="h-4 w-4" />
              </Button> */}

              {/* To Currency */}
              <div className="space-y-2 mt-5">
                <Label>Para</Label>
                <Select value={toCurrency} onValueChange={setToCurrency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Result */}
            <div className="pt-4 border-t">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Resultado</p>
                <p className="text-4xl font-bold text-primary">
                  {calculateConversion().toFixed(2)} {toCurrency}
                </p>
                <p className="text-sm text-muted-foreground">
                  Taxa de câmbio: 1 {fromCurrency} ={" "}
                  {getExchangeRate().toFixed(4)} {toCurrency}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exchange Rate Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Tabela de Taxas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {currencies.map((currency) => (
                <div
                  key={currency.code}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <span className="font-medium">
                    {currency.code} - {currency.name}
                  </span>
                  <span className="text-muted-foreground">
                    1 BRL = {currency.rate.toFixed(4)} {currency.code}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
