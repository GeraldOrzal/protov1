import React,{useContext,useState,useEffect} from 'react'
import accService from '../../Services/AccountService';
import {useHistory} from 'react-router-dom'
const AuthContext = React.createContext()

export function UseAuth(){
    return useContext(AuthContext);
}
export default function AuthProvider({children}) {
    const history = useHistory()
    const [user, setuser] = useState(accService.CheckActiveUser())
    const [details, setdetails] = useState()
    const [auth, setauth] = useState(false)
    useEffect(()=>{
        const listener = accService.SessionChange(setuser,setauth,history,setdetails)
        if(user!==null){
            setauth(true)
        }else{
            setauth(false)
        }
        return ()=>{
            listener?.unsubscribe();
        }    
    },[])
    const value={
        auth,user,details,setdetails
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
