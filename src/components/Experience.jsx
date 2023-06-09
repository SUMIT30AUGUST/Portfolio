import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import mongodb from '../assets/mongodb.png'
import reactjs from '../assets/reactjs.png'
import typescript from '../assets/typescript.png'
import javascript from '../assets/javascript.jpg'
import jira from '../assets/jira.jpg'
import MsSql from '../assets/MsSql.png'
import nodejs from '../assets/nodejs.png'
import jwt from '../assets/JWT.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.jpg'




const Experience = () => {
        
  const tech =[
      {
        id:1,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'
      } ,
      {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-500'
      } ,
      {
        id:3,
        src:javascript,
        title:'Javascript',
        style:'shadow-yellow-500'
      } ,
      {
        id:4,
        src:typescript,
        title:'JIRA',
        style:' shadow-blue-500'
      } ,
      {
        id:5,
        src:reactjs,
        title:'React Js',
        style:'shadow-blue-600'
      } ,
      {
        id:6,
        src:nodejs,
        title:'Node js',
        style:'shadow-green-500'
      } ,
      {
        id:7,
        src:tailwind,
        title:'Tailwind CSS',
        style:'shadow-blue-600'
      } ,
      {
        id:8,
        src:mongodb,
        title:'MongoDB',
        style:'shadow-green-600'
      } ,
      {
        id:9,
        src:MsSql,
        title:'JIRA',
        style:'shadow-blue-500'
      } ,
      {
        id:10,
        src:jwt,
        title:'JWT',
        style:'shadow-purple-500'
      } ,
      {
        id:11,
        src:jira,
        title:'JIRA',
        style:'shadow-blue-500'
      } ,                 
      {
        id:12,
        src:github,
        title:'Github',
        style:'shadow-gray-500'
      } ,                 
       
  ]
       


  return (
    <div name="experiece" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'
    >
       
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
        <div  > 
            <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline ' >Experience</p>
            <p className='py-6' >These are the technologies I've worked with</p>
        </div> 

        <div className='  w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ' >
         
            {
              tech.map(({id,src,style,title})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} className='w-20 mx-auto  ' alt='/imgnotfound'/>
                <p className='mt-4 ' >{title}</p>
            </div>
              ))
            }

       
    </div>   
    </div>  

    
    

    </div>
  )
}

export default Experience
