import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import Like from "../Like/Like";
import App from "../App";
import Somth from "../Somth/Somth";
import {PrivateRoute} from "../Auth/PrivateRoute"

export function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/' exact>
                    <App/>
                </Route>
                <Route path="/like" exact>
                    <Like/>
                </Route>
                <PrivateRoute path="/login" exact>
                    <Somth/>
                </PrivateRoute>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

