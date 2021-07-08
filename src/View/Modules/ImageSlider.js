import React ,{useState,useRef,useEffect}from 'react'
import '../Styles/Slider.css'
export default function ImageSlider(props) {
    const [allImages, setAllImages] = useState(props?.images)
    const [currentImage, setcurrentImage] = useState(allImages[0])
    const imageCont = useRef();
    useEffect(()=>{
        Setup()
    },[])
    function Setup(){
        setInterval(()=>{
            Next()
        },10000)
    }
    function Next(){
        if(allImages.indexOf(currentImage)===2){
            setcurrentImage(allImages[0])
            return;    
        }
        setcurrentImage(allImages[allImages.indexOf(currentImage)+1])
    }
    function Prev(){
        if(allImages.indexOf(currentImage)===0){
            setcurrentImage(allImages[2])
            return;    
        }
        setcurrentImage(allImages[allImages.indexOf(currentImage)-1])
    }
    return (
        <div className="slider">
            <img ref={imageCont} src={currentImage.src} alt={currentImage.alt}/>
            <div id="circleSlider">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
