import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ periodName, expenses }) => {

  const expenesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)
  return (
    <View>
      <Text>{periodName}</Text>
      <Text> ${expenesSum.toFixed(2)}</Text>
    </View> 
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({})