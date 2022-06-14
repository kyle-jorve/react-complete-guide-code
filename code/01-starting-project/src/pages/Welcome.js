import React from "react";
import { Route } from 'react-router-dom';

function Welcome() {
    return (
        <React.Fragment>
            <h1>Welcome Welcome Welcome!</h1>

            <Route path="/welcome/new-user">
                <h2>You must be new here</h2>
            </Route>

            <img src="https://c.tenor.com/RMONbnr9hgwAAAAC/john-oliver.gif" alt=""/>
        </React.Fragment>
    )
}

export default Welcome;