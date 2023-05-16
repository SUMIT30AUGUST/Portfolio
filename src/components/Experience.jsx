import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import mongodb from '../assets/mongodb.png'
import reactjs from '../assets/reactjs.png'
import typescript from '../assets/typescript.webp'
import javascript from '../assets/javascript.jpg'
import jira from '../assets/jira.jpg'
import MsSql from '../assets/MsSql.png'
import nodejs from '../assets/nodejs.png'
import jwt from '../assets/JWT.png'
import tailwind from '../assets/tailwind.png'




const Experience = () => {
  return (
    <div name="experiece" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
       
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
        <div  > 
            <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline ' >Experience</p>
            <p>These are the technologies I've worked with</p>
        </div>    
    </div>  

    
    <div className=' w-full gap-8 text-center py-8 px-12 sm:px-0 ' >
        <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
            <img src={html} className='w-20 mx-auto ' />
            <p className='mt-4 ' >HTML</p>
        </div>
    </div>

    </div>
  )
}

export default Experience
