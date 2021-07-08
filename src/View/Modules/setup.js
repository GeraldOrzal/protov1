import homeIcon from '../Icons/home.svg'
import groupIcon from '../Icons/group.svg'
import settingsIcon from '../Icons/settings.svg'
import mina1 from '../Images/1.jpg'
import mina2 from '../Images/2.jpeg'
import mina3 from '../Images/3.jpg'
export const devices = {
    mobile : {
        min: "320px",
        max: "480px"
    },
    tablet : {
        min:"480px",
        max:"768px"
    },
    laptop : {
        min:"768px",
        max:"1024px"
    },
    desktop : {
        min:"1024px",
        max:"1200px"
    },
    bigscreen : {
        min:"1200px"
    }
}
export const notAuthLinks =[
    {
        link:"/",
        icon:homeIcon,
        linkName:"HOME",
    },
    {
        link:"/signin",
        icon:"",
        linkName: "SIGN IN",
    },
    {
        link:"/howtoregister?",
        icon:"",
        linkName:"HOW TO REGISTER",
    }
]
export const authLink=[
    {
        link:"/user/",
        icon:homeIcon,
        linkName:"HOME",
    },
    {
        link:"/groupchats/",
        icon:groupIcon,
        linkName:"GROUPCHATS",
    },
    {
        link:"/administrators/",
        icon:settingsIcon,
        linkName:"CONTROL PANEL",
    }
    
]
export const variants={
    initial :{
        x:-100        
    },
    exit:{
        x:-100
    },
    start:{
        x:0
    },
    transition:{
        type:"spring",
        stiffness: 400,
        duration: 4
    }
}
export const images=[
    {src:mina1,alt:"myWife"},
    {src:mina2,alt:"myWife"},
    {src:mina3,alt:"myWife"}
]
export const navStyleMob = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    position: "absolute",
    rowGap: "2vh",
    width: "50vw",
    zIndex:"1",
    backgroundImage: "radial-gradient( at bottom left ,#DBE8E1 ,#034687)",
    alignItems: "center",
}
export const navStyleMobAuth = {
    display: "flex",
    flexDirection: "row",
    columnGap: "20vw",
    width: "100%",
    borderTop: "solid black 2px",
    height: "8vh",
    backgroundColor: "white",
    position: "fixed",
    zIndex:"1",
    alignItems: "center"
}