import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from '../assets/obi-wan.webp';

function Products() {
    const navigate = useNavigate();

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

            <img src={image} alt=""/>
        </React.Fragment>
    )
}

export default Products;