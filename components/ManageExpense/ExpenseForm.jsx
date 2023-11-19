import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

const ExpenseForm = () => {
    function amounChangedHandler() { }
    return (
        <View>
            <Input label='Amount' textInputConfig={{ KeyboardType: 'decimal-pad', onChangeText: amounChangedHandler }} />
            <Input label='Date' textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxlength: 10,
                onChangeText: () => { }
            }} />
            <Input label='Description' 
            textInputConfig={{
                multiline:true,
                
            }}/>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({})