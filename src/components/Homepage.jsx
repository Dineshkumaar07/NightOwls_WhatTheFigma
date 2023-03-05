import React from 'react'
import bg from '../images/homepage/poster.png'
import Card from './Card'

const Homepage = () => {
    
  return (
    <div>
        <div className='pl-48 pt-36'>
            <div className="relative ">
                <img src={bg} alt=""  className='w-[1200px] h-80 '/>
                <div className='absolute top-10 left-10 flex flex-col justify-between h-44'>
                    <p className='text-3xl font-bold text-white'>Continue Watching</p>
                    <div>
                        <p className='text-3xl font-bold text-white'>Joker</p>
                        <div className='flex pt-2'>
                            <p className='border-r-2 w-fit pr-3 text-white/70'>2019</p>
                            <p className='border-r-2 w-fit pr-3 px-3 text-white/70'>Crime/Drama</p>
                            <p className='px-3 text-white/70'>2h 2min</p>

                        </div>
                    </div>
                    <button className='flex bg-pink w-28 rounded-md px-3 py-1 justify-between'>
                    <p className='text-white'>Resume</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>

                </button>
                </div>

            </div>
            <div className='mt-8'>
                <h1 className='text-2xl text-white font-semibold'>Popular on Netflix</h1>
                <div className='flex'>
                <Card imageNo={1}/>
                <Card imageNo={2}/>
                <Card imageNo={3}/>
                <Card imageNo={4}/>
                <Card imageNo={5}/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Homepage