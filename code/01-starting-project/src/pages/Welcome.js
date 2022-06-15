import React from "react";
import { Link, Outlet } from 'react-router-dom';
import image from '../assets/john-oliver.gif';

function Welcome() {
    return (
        <React.Fragment>
            <h1>Welcome Welcome Welcome!</h1>

            <Outlet />

            <Link to="new-user">New Loser</Link>

            <img src={image} alt=""/>
        </React.Fragment>
    )
}

export default Welcome;