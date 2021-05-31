import React from 'react'
import { Form } from './Components/Form'
import {req} from '../misc/formRequirements'
export class SignupView extends React.Component{
    render(){
        return(
            <>
              <Form formType={'registration'} req={req}/> 
            </>
        );
    }
}