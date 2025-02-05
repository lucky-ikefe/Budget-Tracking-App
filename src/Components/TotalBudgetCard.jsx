import { useBudgets } from "../contexts/BudgetsContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard(props) {
  const { budgets, expenses } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  
 
  if (amount === 0) return null

  return (
    <BudgetCard name='Total' amount={amount} hideButtons gray max={max} />
  )
}
