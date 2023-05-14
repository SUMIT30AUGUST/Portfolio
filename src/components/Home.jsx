import React from 'react'
import sumitPic2 from '../assets/sumitPic2.png'
import  {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black 
    via-black to bg-gray-800 ' 
    >
       <div className='max-w-screen-lg mx-auto flex flex-col
       items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl text-white font-bold '>
                    I am a Full Stack Web Developer
                </h2>
                <p className='text-gray-500 py-4'>
                    I have 6 months+ experience building and designing  Web Application 
                    using Technologies like React Js , Node Js , JWT , Tailwind ,  Material UI , Next JS and REST API's.
                </p>

                <div>
                    <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
                  '>
                        Portflio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                {/* Compiler Warning :- Dont use picture,image or photo inside alt because the build will fail when you go for deploying the project */}
                <img src={sumitPic2} alt="my profile" className='rounded-2xl mx-auto w-2/3 '/> 
            </div>
       </div>


      </div>
  )
}

export default Home
