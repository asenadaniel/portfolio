
import Tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
import HTML from '../../assets/html.png'
import fireebase from '../../assets/firebase.png'
import css from '../../assets/css.png'
import nextJs from '../../assets/nextjs.png'


function Skills() {
  return (
    <div id='skills' className=' bg-[#0a192f]   text-gray-300 w-full h-screen'>
      <div className=' max-w-[1000px] mx-auto p-5 flex flex-col w-full h-full justify-center '>
        <div>
          <p className=' text-4xl font-bold inline border-b-4 border-black'>Skills</p>
          <p className=' py-7'>I have experience with the following technologies</p>
        </div>

        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className=' shadow-md hover:scale-110 duration-500 '>
            <img src={HTML} alt="" className=' w-20 mx-auto' />
            <p className=' my-5'>HTML</p>
          </div>
          <div className=' shadow-md hover:scale-110 duration-500 '>
            <img src={css} alt="" className=' w-20 mx-auto' />
            <p className=' my-5'>CSS</p>
          </div>
          <div className=' shadow-md hover:scale-110 duration-500 '>
            <img src={Tailwind} alt="" className=' w-20 mx-auto' />
            <p className=' my-5'>TAILWIND</p>
          </div>
          <div className=' shadow-md hover:scale-110 duration-500 '>
            <img src={react} alt="" className=' w-20 mx-auto' />
            <p className=' my-5'>REACT</p>
          </div>
          <div className=' shadow-md hover:scale-110 duration-500 '>
            <img src={nextJs} alt="" className=' w-20 mx-auto' />
            <p className=' my-5'>NEXTJS</p>
          </div>
          <div className=' shadow-md hover:scale-110 duration-500 '>
            <img src={fireebase} alt="" className=' w-20 mx-auto' />
            <p className=' my-5'>FIREBASE</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
