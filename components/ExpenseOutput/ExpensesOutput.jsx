import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/stlyes'

const Dummy_Expenses =[
    {
        id:'e1',
        description:' A pair of shoes',
        amount: 59.99,
        date:new Date('2021-11-18')
    },  {
        id:'e2',
        description:' A pair of pants',
        amount: 89.99,
        date:new Date('2022-11-18')
    },
    {
        id:'e3',
        description:' computer',
        amount: 159.99,
        date:new Date('2023-11-18')
    }, 
     {
        id:'e4',
        description:' Telephone',
        amount: 359.99,
        date:new Date('2023-10-10')
    },  {
        id:'e5',
        description:' Book',
        amount: 19.99,
        date:new Date('2023-09-18')
    }
]

const ExpensesOutput = ({ expenses,expensesPeriod }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary periodName={expensesPeriod} expenses={Dummy_Expenses}/>
            <ExpensesList expenses={Dummy_Expenses}/>
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700,
    }

})