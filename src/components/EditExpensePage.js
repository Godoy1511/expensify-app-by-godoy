import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
    <div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                console.log("updated", expense);
                props.history.push("/");
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
            props.history.push("/");
        }}>Remove</button>
    </div>
    );
};


// find searches for a single iten on an array
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);