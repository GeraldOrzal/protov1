import React ,{useContext,useState} from 'react'
const NavBarContext = React.createContext()
export function UseNavContext(){
    return useContext(NavBarContext)
}
export default function NavBarSetup({children}) {
    const [burgerClick, setburgerClick] = useState(false)
    const value = {
        burgerClick,setburgerClick
    }
    return (
        <NavBarContext.Provider value={value}>
            {children}
        </NavBarContext.Provider>
    )
}
