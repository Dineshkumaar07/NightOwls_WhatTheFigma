import React from 'react'
import Navbar from './navbar'
//images
import home from '../images/sidenav/Home.png'
import fav from '../images/sidenav/Fav.png'
import icon1 from '../images/sidenav/icon-1.png'
import icon from '../images/sidenav/icon.png'
import movie from '../images/sidenav/Movie.png'
import notification from '../images/sidenav/Notification.png'
import settings from '../images/sidenav/Settings.png'
import quit from '../images/sidenav/Vector.png'
import Homepage from './Homepage'

const sidepage = () => {
  return (
    
        <div>
                    <div className='w-16 fixed'>
            <div className='py-6 bg-blue flex flex-col h-screen items-center justify-between rounded-r-lg'>
            <div>
            <img src={icon1} className='w-6'/>

            </div>
            <div className='flex flex-col justify-center h-full'>
                <img src={home} className='w-6 mb-7'/>
                <img src={movie} className='w-6 mb-7'/>
                <img src={fav} className='w-6 mb-7'/>
                <img src={notification} className='w-6 mb-7'/>
                <img src={icon} className='w-6 mb-7'/>
                <img src={settings} className='w-6 mb-7'/>
            </div>
            <div>
              <img src={quit} className = 'w-6'/>

            </div>
            
    

        </div>
        
        
    </div>
    <Homepage/>
        </div>
    
  )
}

export default sidepage