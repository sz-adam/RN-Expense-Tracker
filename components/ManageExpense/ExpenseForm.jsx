import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

const ExpenseForm = () => {

    const [inputValues, setInputvalues] = useState({
        amount: '',
        date: '',
        description: ''
    })


    function inputChangedHandler(inputIdentifier ,enteredValue) {
        setAmountValue((curInputValues)=>{
            return{
                ...curInputValues,
                [inputIdentifier]:enteredValue
            }
        })
    }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input label='Amount'
                    style={styles.rowInput}
                    textInputConfig={{
                        KeyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }} />
                <Input label='Date' textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxlength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date
                }} />
            </View>

            <Input label='Description'
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description
                }} />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 80,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },

})