// connect permite conectar o componente à redux store

import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// no primeiro item do connect (o primeiro parenteses), está o item que queremos levar para fora da store
// no segundo item, esta o componente que queremos criar a versão conectada
// o resultado é um novo componente, que é basicamente nosso componente ExpenseList, com as props da store
export default connect(mapStateToProps)(ExpenseList);