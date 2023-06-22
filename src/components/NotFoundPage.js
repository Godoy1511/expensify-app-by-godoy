// <Link> é a mesma coisa que <a>, só que ele funciona mais rápido, uma vez que ele apenas checa e linka com a Route correta
import React from "react";
import { Link } from "react-router-dom"

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;