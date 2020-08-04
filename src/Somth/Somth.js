import React from 'react';
import {WithAuth} from "../Auth";
import {Button, FlexWrapper, Panel} from "../Compoents";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";

export default WithAuth(({isAuthorized, authorize}) =>
    // isAuthorized ? (
    //     <Redirect to="/login"/>
    // ) : (
        <FlexWrapper>

                <Panel>
                        <h1>You are not Authorized</h1>
                        <NavLink to={'/'}>
                                <button className='btn'>Back....</button>
                        </NavLink>
                        <Button onClick={authorize}>Auth</Button>
                </Panel>
        </FlexWrapper>
    // )
);
//dev-rweezg8w
