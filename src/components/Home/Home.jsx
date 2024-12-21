import { ArrowForward } from '@mui/icons-material'


function Home() {
  return (
    <div className=' bg-[#0a192f] h-screen w-full' id='home'>

      {/* container */}
      <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=' text-blue-400   '>Hi, My Name is</p>
        <h1 className=' text-4xl sm:text-6xl font-bold text-[#ccd6f6f6]'>Daniel Asena</h1>
        <h2 className=' text-3xl sm:text-6xl font-bold text-[#8892b0] '>I&#39;m a Front-End Developer.</h2>
        <p className='text-[#8892b0] max-w-[700px] py-5'>I&#39;m all about React, striving to create stellar digital experiences</p>

        <div>
          <button className=' group flex items-center justify-between cursor-pointer text-white border-2 px-6 py-3 my-3 hover:bg-slate-600 hover:border-slate-600'>
            View Work
            <span className=' group-hover:rotate-90 duration-300'>
              <ArrowForward className='ml-3' />
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home
