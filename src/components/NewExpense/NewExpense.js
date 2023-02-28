import React from "react";

import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = () => {

    const saveExpenseHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
    }

    return (
        <div className="new-expense">
        <ExpenseForm onExpenseSavedData={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense
