import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { UseAuth } from './AuthProvider';

export default function PrivateRoute({component:Component,...rest}) {
    const {auth} = UseAuth();
    return (
        <Route {...rest} render={props=>{
            return auth?<Component {...props}/>:<Redirect to="/signin"/>
        }}>
        </Route>
    )
}