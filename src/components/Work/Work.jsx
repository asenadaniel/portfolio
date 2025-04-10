import work1 from '../../assets/work1.jpg'
import work2 from '../../assets/work2.jpg'
import work3 from '../../assets/work3.jpg'
import work4 from '../../assets/work4.jpg'
import invoice2 from '../../assets/invoice2.jpg'
import ticket from '../../assets/ticket.jpg'

function Work() {
  return (
    <div className='  bg-[#0a192f] w-full md:h-screen text-gray-300 md:py-[570px] ' id='work' >

      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full px-9 ' >
        <div className=' pb-8'>
          <p className=' text-4xl font-bold border-b-4  inline border-black '>Work</p>
          <p className=' py-7'>Check Out some of my recent React work</p>
        </div>

        <div className='  grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='   group container flex justify-center flex-col items-center gap-5 mx-auto'>
            <h1 className=' text-xl font-bold'>Food Fusion</h1>
            <img src={work1} alt="" className=' ' />
            <div className=' flex gap-5  '>
              <a href="https://food-lake-nine.vercel.app/">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>
                  Demo
                </button>
              </a>
              <a href="https://github.com/asenadaniel/Food">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>Code</button>
              </a>
            </div>
          </div>

          <div className='   group container flex justify-center flex-col items-center gap-5 mx-auto'>
            <h1 className=' text-xl font-bold'>NetTrail</h1>
            <img src={work2} alt="" className='w-[95%]' />
            <div className=' flex gap-5  '>
              <a href="https://neti-asndaniels-projects.vercel.app/">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>
                  Demo
                </button>
              </a>
              <a href="https://github.com/asenadaniel/Neti">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>Code</button>
              </a>
            </div>
          </div>

          <div className=' group container flex justify-center flex-col items-center mx-auto gap-5'>
            <h1 className=' text-xl font-bold'>Pizza</h1>
            <img src={work3} alt="" className=' h-[276px] object-cover' />
            <div className=' flex gap-5   '>
              <a href="https://thepizza.vercel.app/">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>
                  Demo
                </button>
              </a>
              <a href="https://github.com/asenadaniel/thepizza">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>Code</button>
              </a>
            </div>
          </div>

          <div className='  group container flex justify-center flex-col items-center mx-auto gap-5'>
            <h1 className=' text-xl font-bold'>Ecommerce site</h1>
            <img src={work4} alt="" className=' h-[276] object-contain ' />
            <div className=' flex gap-5   '>
              <a href="https://ecommerce-asndaniels-projects.vercel.app/">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>
                  Demo
                </button>
              </a>
              <a href="https://github.com/asenadaniel/ecommerce">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>code</button>
              </a>
            </div>
          </div>
          <div className='  group container flex justify-center flex-col items-center mx-auto gap-5'>
            <h1 className=' text-xl font-bold'>InvoiceGebnerator</h1>
            <img src={invoice2} alt="" className=' h-[276] w-[250px] object-contain' />
            <div className=' flex gap-5   '>
              <a href="https://invoice-gebnerator.vercel.app/">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>
                  Demo
                </button>
              </a>
              <a href="https://github.com/asenadaniel/invoiceGebnerator">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>code</button>
              </a>
            </div>
          </div>
          <div className='  group container flex justify-center flex-col items-center mx-auto gap-5'>
            <h1 className=' text-xl font-bold'>Ticket Generator</h1>
            <img src={ticket} alt="" className=' h-[276] w-[250px] object-contain' />
            <div className=' flex gap-5   '>
              <a href="https://tidketgenerator.vercel.app/">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>
                  Demo
                </button>
              </a>
              <a href="https://github.com/asenadaniel/tidketgenerator">
                <button className=' bg-slate-600 px-6 py-3 rounded-lg'>code</button>
              </a>
            </div>
          </div>

          <p className=' text-center flex justify-center items-center text-xl font-bold '>More Coming Soon.....</p>
        </div>
      </div>
    </div>

  )
}

export default Work
