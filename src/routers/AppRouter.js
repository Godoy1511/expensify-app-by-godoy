import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

// Com o Route, o path checa se o caminho "bate" com o fornecido

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <div>{JSON.stringify(process.env)}</div>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;