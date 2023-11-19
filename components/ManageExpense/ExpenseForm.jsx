import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../UI/Button'
import { getFormattedDate } from '../../util/date'

const ExpenseForm = ({ cancelHandler, submitButtonLabel, onSubmit, defaultValues }) => {

    const [inputValues, setInputvalues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    })


    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputvalues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };

        const amountIsValid =!isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() ==='Invalid Date';
        const descriptionIsValid =expenseData.description.trim().length> 0;

        if(!amountIsValid ||!dateIsValid || !descriptionIsValid){
           Alert.alert('Invalid input', 'Please check your input values')
            return
        }
        onSubmit(expenseData)
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
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
})