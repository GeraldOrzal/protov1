import React,{useRef} from 'react'
import {motion} from 'framer-motion'
import './Styles/PageLayout.css'
import {Link} from 'react-router-dom'
import {useHistory,Redirect} from 'react-router-dom'
import accService from '../Services/AccountService'
import {UseAuth} from '../View/Modules/AuthProvider'
import { UseResponsive } from './Modules/Responsive'
export default function SigninPage(props) {
    const errorMessage = useRef()
    const {auth,user,setdetails} = UseAuth()
    const {isMobileDevice} = UseResponsive()
    function Signin(x){
        x.preventDefault()
        accService.Signin({email:"geraldorzal18@gmail.com",password:"geraldpogi14"})   
    }

    return (
        auth?<Redirect to={"/user/"+user.user.id}/>:
        <motion.div variants={!isMobileDevice?props.variants:{}}  initial="initial" animate="start" exit="exit" transition="transition" className="page-flex-layout-column basePage signinPage">
            <form id={isMobileDevice?"log-mobile":"log_form"} onSubmit={Signin}>
                <label ref={errorMessage}></label>
                <label>EMAIL:</label>
                <input/>
                <label>PASSWORD:</label>
                <input/>
                <button>LOGIN</button>
                <Link to="/signup">DONT HAVE AN ACCOUNT YET? SIGNUP HERE</Link>                
            </form>
        </motion.div>
    )
}
