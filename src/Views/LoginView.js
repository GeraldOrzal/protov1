import React from 'react'
import { Form } from './Components/Form'
import './Styles/LoginStyle.css'
export class LoginView extends React.Component{
    render(){
        return(
            <div id='cont'>

              <Form formType={'login'} req={["email","password"]}/> 
              <span></span>
              <div id='btnHolder'>
                <button>Google login</button>
                <button>Microsoft login</button>
                <button>Twitter Login</button>
              </div>
              
            </div>
        );
    }
}