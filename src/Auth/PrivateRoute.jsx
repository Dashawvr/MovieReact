import React from "react";
import { WithAuth } from '../Auth';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = WithAuth(({component: RouteComponent, isAuthorized, ...rest}) => (
    <Route
        {...rest}
        render={routeProps => (
            isAuthorized ? (
                <RouteComponent {...routeProps}/>
            ) : (
                <Redirect to={'/login'}/>
            )
        )}/>
))
