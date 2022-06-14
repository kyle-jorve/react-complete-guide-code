import React from "react";
import { Link } from "react-router-dom";

function Products() {
    return (
        <React.Fragment>
            <h1>This is the products page</h1>
            <h2>Look at all our wonderful products</h2>

            <ul>
                <li>
                    <Link to="/products/p1">A Dumb Book</Link>
                </li>
                <li>
                    <Link to="/products/p2">A Stupid Movie</Link>
                </li>
                <li>
                    <Link to="/products/p3">A Fuck-Off Idiot Video Game or Something</Link>
                </li>
            </ul>

            <img src="https://origin.go.gq.com.au/wp-content/uploads/2019/08/main-46.jpg" alt=""/>
        </React.Fragment>
    )
}

export default Products;