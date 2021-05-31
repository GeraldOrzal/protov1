import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/NavStyle.css'
export class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false
        }
        this.navList = {notLogged:[{link:"/howto",linkName:"HowToRegister"},{link:"/signin",linkName:"Signin"},{link:"/signup",linkName:"Signup"}],logged:[{link:"/user/:name/",linkName:"Attendance"},{link:"/user/:groupchats",linkName:"GroupChats"}]}
    }
    componentDidMount(){
        if(this.props.user!=null){
            this.setState({isLoggedIn:true});
        }else{
            this.setState({isLoggedIn:false});
        }
    }
    componentDidUpdate(){
        
    }
    HandleList(list){
        if(list!=null){   
            return list.map(({link,linkName})=>(
                <Link key={link}to={link}>{linkName}</Link>
            ))
        }
    }
    render(){
        return(
            <ul id="nav_cont">
                <img src={this.props.LOGO} alt={"company logo"}/>
                {this.HandleList(this.state.isLoggedIn?this.navList.logged:this.navList.notLogged)}
            </ul>
        );
    }
}