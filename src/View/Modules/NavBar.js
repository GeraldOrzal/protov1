import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { UseResponsive } from './Responsive'
import '../Styles/NavStyle.css'
import {motion} from 'framer-motion'
import {UseAuth} from '../Modules/AuthProvider'
import {authLink,notAuthLinks} from './setup'
import {UseNavContext} from './NavBarSetup'
import accService from '../../Services/AccountService'
import {navStyleMob,navStyleMobAuth} from './setup'
import logo from '../Images/1.jpg'
export default function NavBar() {
    const {auth,user} = UseAuth()
    const {isMobileDevice} = UseResponsive()
    const {burgerClick,setburgerClick}= UseNavContext()
    function HandleSignout(){
        accService.Signout((x)=>{
            alert(x)
        })
        
    }
    function GenerateLinks(){

        return auth===true?authLink.map(({link,icon,linkName})=>{
            return isMobileDevice?<Link to={link+user.user.id} key={link}><img src={icon} className="icons"/></Link>:<Link to={link+user.user.id} key={link}>{linkName}</Link>
        }):notAuthLinks.map(({link,icon,linkName})=>{
            return <Link to={link} key={link}>{linkName}</Link>
        })
    }
    return (!isMobileDevice?
            <div className="nav" >
                <img id="logo" src={logo}/>
                {auth?<>{GenerateLinks()}<button onClick={()=>{HandleSignout()}}>LOGOUT</button></>:GenerateLinks()}
            </div>:
            <>
                <div id="burger" onClick={()=>{setburgerClick(!burgerClick)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img id="logo" src={logo} style={{position:"absolute",marginLeft:"40vw"}}/>
                <motion.div style={auth?navStyleMobAuth:navStyleMob} initial={auth?{y:-100}:{}} animate={auth?burgerClick?{y:"92vh"}:{y:-100}:burgerClick?{x:0}:{x:-200}} transition={{type:"spring",stiffness:100,duration:1}}>
                    {auth?<>{GenerateLinks()}{isMobileDevice?<img src={logo} id="log-ico" onClick={()=>{HandleSignout()}}/>:<button onClick={()=>{HandleSignout()}}>LOGOUT</button>}</>:GenerateLinks()}           
                </motion.div>
            </>
    )
}
