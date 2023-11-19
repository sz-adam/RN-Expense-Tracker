import { StyleSheet, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/stlyes'
import Button from '../components/UI/Button'
import { ExpensesContext } from '../store/expenses.context'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'


const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? ' Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, { description: 'malibu', amount: 19.99, date: new Date('2023-11-10') })
    } else {
      expensesCtx.addExpense({ description: 'test', amount: 99.99, date: new Date('2023-11-08') })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.conatainer}>
      <ExpenseForm cancelHandler={cancelHandler} confirmHandler={confirmHandler} submitButtonLabel={ isEditing ? 'Update': 'Add'}/>
     
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon='trash'
            color={GlobalStyles.colors.error500}
            size={30} onPress={deleteExpenseHandler} />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
})