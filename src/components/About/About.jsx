import React from 'react'

function About() {
  return (
    <div id='about' className=' w-full h-screen bg-[#0a192f] text-gray-300'>

      <div className=' flex flex-col justify-center items-center w-full h-full'>

        <div className=' max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
          <div className=' sm:text-right pb-8 pl-4'>
            <p className=' text-4xl font-bold inline border-b-4 border-black '>About</p>
          </div>
          <div></div>
        </div>
        <div className=' max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5'>
          <div className=' sm:text-right  text-4xl font-bold'>
            <p>HI, I'm Daniel nice to meet you, Please take a look around</p>
          </div>
          <div>
            <p>
              I'm Daniel Asena, a passionate React.js enthusiast. I thrive in collaborative environments and love solving problems, With a strong foundation in React.js. I'm eager to learn and take on new challenges.

              Let's connect and create something great together!

            </p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default About;
