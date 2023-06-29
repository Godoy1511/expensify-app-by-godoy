import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses"

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense:</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push("/"); // Serve para redirecionar o usuário à página de URL final "/"
            }}
        />
    </div>
);

export default connect()(AddExpensePage);
