import React from 'react'
import {motion} from 'framer-motion'
import ImageSlider from './Modules/ImageSlider'
import './Styles/PageLayout.css'
import {images} from './Modules/setup.js'
import {Redirect} from 'react-router-dom'
import {UseAuth} from './Modules/AuthProvider'
import {UseResponsive} from './Modules/Responsive'
export default function LandingPage(props) {
    const {auth,user} = UseAuth()
    const {isMobileDevice} = UseResponsive()
    return (
        auth?<Redirect to={"/user/"+user.user.id}/>:
        <motion.div variants={!isMobileDevice?props.variants:{}} initial="initial" animate="start" exit="exit" transition="transition" className={isMobileDevice?"page-flex-layout-column"+" basePage landingPage":"page-flex-layout-row"+" basePage landingPage"}>
            <div id="about">
                <motion.h1>ABOUT US</motion.h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            {isMobileDevice?<></>:<ImageSlider images={images}/>}
        </motion.div>
    )
}
