import React from 'react'
import {FaGithub ,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const SocialLinks = () => {
  
    const Links = [ 
          {
               id:1,
               child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
               ),
               href:'https://linkedin.com' ,
               style: "rounded-tr-md"
        } ,

        {
            id:2,
            child:(
             <>
            Github <FaGithub size={30}/>
             </>
            ),
            href:'https://github.com/SUMIT30AUGUST' ,
            style: "rounded-md"
       } ,

       {
          id:3,
          child:(
           <>
          Mail <HiOutlineMail size={30}/>
           </>
            ),
           href:'mailto:sumitrawat30aug@gmail.com' ,
           style: "rounded-md"
   } ,

   {
      id:4,
      child:(
       <>
       My Resume <BsFillPersonLinesFill size={30}/>
       </>
       ),
      href:'/1sumitrawatresume.pdf' ,
      style: "rounded-br-md",
      download:true
}

    ]
  
    return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {Links.map(({id,child,href,style,download})=>(
                <li key={id}  className={"flex justify-between items-center w-40 h-14 px-4  ml-[-105px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                    
                    <a 
                    href={href}
                    className='flex justify-between items-center w-full text-white' 
                    download={download} 
                    target='_blank'
                    rel='noreferrer'
                    >
                        {child}
                    </a>
                    </li>
            ))}


           
        </ul>
    </div>
  )
}

export default SocialLinks
