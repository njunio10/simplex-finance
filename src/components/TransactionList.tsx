import { useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: "income" | "expense";
}

const mockTransactions: Transaction[] = [
  { id: "1", description: "Salário", amount: 5000, category: "Salário", date: "2024-01-15", type: "income" },
  { id: "2", description: "Aluguel", amount: -1500, category: "Moradia", date: "2024-01-10", type: "expense" },
  { id: "3", description: "Supermercado", amount: -350, category: "Alimentação", date: "2024-01-08", type: "expense" },
  { id: "4", description: "Freelance", amount: 800, category: "Freelance", date: "2024-01-05", type: "income" },
];

export function TransactionList() {
  const [transactions] = useState<Transaction[]>(mockTransactions);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Transações Recentes</h3>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-smooth"
          >
            <div className="flex-1">
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(transaction.date).toLocaleDateString("pt-BR")} • {transaction.category}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`font-semibold ${
                  transaction.type === "income" ? "text-success" : "text-destructive"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl">
                  <DropdownMenuItem className="rounded-lg">
                    <Pencil className="h-4 w-4 mr-2" />
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive rounded-lg">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
