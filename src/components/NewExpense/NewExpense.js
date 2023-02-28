import React from "react";

import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {

    const saveExpenseHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
        <ExpenseForm onExpenseSavedData={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense
