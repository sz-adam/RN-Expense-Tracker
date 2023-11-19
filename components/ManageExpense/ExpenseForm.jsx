import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

const ExpenseForm = () => {
    function amounChangedHandler() { }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input label='Amount'
                style={styles.rowInput}
                    textInputConfig={{
                        KeyboardType: 'decimal-pad',
                        onChangeText: amounChangedHandler
                    }} />
                <Input label='Date' textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxlength: 10,
                    onChangeText: () => { }
                }} />
            </View>

            <Input label='Description'
                textInputConfig={{
                    multiline: true,
                }} />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form:{
        marginTop:80,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign:'center'
    },
    inputsRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowInput:{
        flex:1,
    },

})