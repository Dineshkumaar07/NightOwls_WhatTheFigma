import React from 'react'
import u1 from '../images/navbar/1.png'
import u2 from '../images/navbar/2.png'
import u3 from '../images/navbar/3.png'
import u4 from '../images/navbar/4.png'
import logo from '../images/navbar/logo.png'

const navbar = () => {
  return (
    <div className='fixed w-full px-6 py-4'>
        <div className='flex w-full justify-center '>
            <div className='flex justify-center w-full  ml-11'>
                <div className='flex flex-col items-center gap-2 font-bold text-lg mx-9 '>
                <img src={u2} alt="u2" className='h-16   rounded-2xl shadow-lg  shadow-white '/>
                <p className='text-white tracking-wide '>Jonas</p>
                </div>
                <img src={u4} alt="u1" className='h-16 mx-9 rounded-2xl '/>
                <img src={u3} alt="u3" className='h-16 mx-9 rounded-2xl '/>
                <img src={u1} alt="u4" className='h-16 ml-9 rounded-2xl '/>
            </div>
            <div className='h-9'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default navbar