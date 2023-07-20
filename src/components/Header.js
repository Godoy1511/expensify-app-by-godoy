import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => (
    <header className="header">
            <NavLink className="header__title" to="/" activeClassName="is-active" exact={true}>
                <h1>Expensify</h1>
                Dashboard
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink className="header__title" to="/create" activeClassName="is-active">Create Expense</NavLink> 
    </header>
);

export default Header;
