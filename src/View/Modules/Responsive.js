import React,{useContext} from 'react'
import { useMediaQuery } from 'react-responsive';
import {devices} from './setup'
const ResponsiveContext = React.createContext()
export function UseResponsive(){
    return useContext(ResponsiveContext);
}
export default function Responsive({children}) {
    const isMobileDevice = useMediaQuery({
        minDeviceWidth:devices.mobile.min,maxDeviceWidth: devices.mobile.max
    });
    
    const isTabletDevice = useMediaQuery({
        minDeviceWidth:devices.tablet.min,maxDeviceWidth: devices.tablet.max
    });
    
    const isLaptop = useMediaQuery({
        minDeviceWidth:devices.laptop.min,maxDeviceWidth: devices.laptop.max
    });
    
    const isDesktop = useMediaQuery({
        minDeviceWidth:devices.desktop.min,maxDeviceWidth: devices.desktop.max
    });
    
    const isBigScreen = useMediaQuery({
        minDeviceWidth:devices.bigscreen.min
    });
    const value = {
        isBigScreen,
        isLaptop,
        isMobileDevice,
        isDesktop,
        isTabletDevice
    }
    return (
        <ResponsiveContext.Provider value = {value}>
            {children}
        </ResponsiveContext.Provider>
    )
}

