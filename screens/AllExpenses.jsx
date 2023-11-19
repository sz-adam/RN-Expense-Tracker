import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses.context'

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No registered expenses found!"/>
}

export default AllExpenses

const styles = StyleSheet.create({})