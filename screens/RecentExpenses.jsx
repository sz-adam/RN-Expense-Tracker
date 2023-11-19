import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { ExpensesContext } from '../store/expenses.context'
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput'
import { getDateMinusDays } from '../util/date'

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7daysAgo = getDateMinusDays(today, 7)

    return (expense.date >= date7daysAgo) && (expense.date <= today);
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallbackText="No expenses registered for the last 7 days"/>
}

export default RecentExpenses

const styles = StyleSheet.create({})