import React from 'react'
import sumitPic2 from '../assets/sumitPic2.png'
import sumitPic3 from  '../assets/sumitPic3.jpeg'
import  {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

import {FaGithub ,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black 
    via-black to bg-gray-800 ' 
    >
       <div className='max-w-screen-lg mx-auto flex flex-col
       items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className=' text-4xl sm:text-7xl text-white font-bold '>
                    I am a Full Stack Web Developer
                </h2>
                <p className='text-gray-500 py-4'>
                    I have 1year+ experience building  Web Application 
                    using Technologies like React Js , Node Js , JWT , MsSql server ,MongoDB, Tailwind ,  Material UI  and REST API's.
                </p>
        
                <div>
                    <Link to="portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
                  '>
                        Portflio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
                <div className=' md:hidden flex my-4'>
                <div className=" bg-gray-400 w-30 h-21 px-3 m-2 font-semibold "><a href='https://linkedin.com' target='_blank'
                    rel='noreferrer'>My LinkedIn<FaLinkedin className='w-10 h-8 text-white'/></a></div>

                <div className=" bg-gray-400 w-30 h-21 px-4 m-2 font-semibold"><a target='_blank'
                    rel='noreferrer' href='https://github.com/SUMIT30AUGUST'>My Github<FaGithub className='w-10 h-8 text-white'/></a></div> 

                <div className=" bg-gray-400 w-30 h-15 px-4 m-2 font-semibold "><a target='_blank'
                    rel='noreferrer'href='mailto:sumitrawat30aug@gmail.com'>My Email<HiOutlineMail className='w-10 h-9 text-white'/></a></div>

                <div className=" bg-gray-400 w-30 h-15 px-4 m-2 font-semibold "><a target='_blank'
                    rel='noreferrer' href='/1sumitrawatresume.pdf' download={true}>My Resume<BsFillPersonLinesFill className='w-10 h-9 text-white'/></a></div>
                </div>
            </div>

            <div>
                {/* Compiler Warning :- Dont use picture,image or photo inside alt because the build will fail when you go for deploying the project */}
                <img src={sumitPic3} alt="my profile" className='  rounded-2xl mx-auto w-2/3   md:w-22 mb-10 '/> 
            </div>
       </div>


      </div>
  )
}

export default Home
