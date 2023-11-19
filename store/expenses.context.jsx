import { createContext, useReducer } from "react";


const Dummy_Expenses = [
    {
        id: 'e1',
        description: ' A pair of shoes',
        amount: 59.99,
        date: new Date('2023-11-18')
    }, {
        id: 'e2',
        description: ' A pair of pants',
        amount: 89.99,
        date: new Date('2023-11-12')
    },
    {
        id: 'e3',
        description: 'computer',
        amount: 159.99,
        date: new Date('2022-11-12')
    },
    {
        id: 'e4',
        description: 'Telephone',
        amount: 359.99,
        date: new Date('2023-11-13')
    }, {
        id: 'e5',
        description: ' Book',
        amount: 19.99,
        date: new Date('2023-09-18')
    }, {
        id: 'e6',
        description: ' A pair of pants',
        amount: 89.99,
        date: new Date('2022-11-18')
    },
    {
        id: 'e7',
        description: ' computer',
        amount: 159.99,
        date: new Date('2023-11-18')
    },
    {
        id: 'e8',
        description: ' Telephone',
        amount: 359.99,
        date: new Date('2023-10-10')
    }, {
        id: 'e9',
        description: ' Book',
        amount: 19.99,
        date: new Date('2023-09-18')
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
})

function expensesReducer(state, aciton) {
    switch (aciton.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{ ...aciton.payload, id: id }, ...state]
        case 'UPDATE':
            const updatatableExpenseIndex = state.findIndex((expense) =>
                expense.id === aciton.payload.id
            );
            const updatableExpense = state[updatatableExpenseIndex]
            const updatedItem = { ...updatableExpense, ...aciton.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatatableExpenseIndex] = updatedItem;
            return updatedExpenses
        case 'DELETE':
            return state.filter((expense) => expense.id !== aciton.payload)
        default:
            return state
    }
}

function ExpensesContextProvider({ children }) {

    const [expensesState, dispatch] = useReducer(expensesReducer, Dummy_Expenses);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    };

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider