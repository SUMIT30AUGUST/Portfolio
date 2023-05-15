import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div>
              <p>About</p>
          </div>
          <p className='text-xl mt-20'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quibusdam, distinctio, quae beatae consequatur provident praesentium sed consequuntur numquam, ipsum aperiam dolores corporis non ea at? Error numquam quae id.
          </p>

          <br/>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, magnam quasi cupiditate aut perferendis assumenda expedita adipisci dolores eos eveniet voluptatem nihil illo rerum quaerat alias eius in ea iste.
          </p>
       </div>
    </div>
  )
}

export default About;