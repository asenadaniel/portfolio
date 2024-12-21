
import { GitHub, LinkedIn, Menu } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import './nav.css'
import { Link } from 'react-scroll';

function Navbar() {

  const [open, setOpen] = useState(false)


  return (
    <div className=' fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className=' ml-10 text-3xl'>Asndaniel</h1>
      </div>

      <ul className=' md:flex hidden'>
        <li>
          <Link activeClass="active" to="home" smooth={true}
            sduration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" smooth={true}
            sduration={500}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="skills" smooth={true}
            sduration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="work" smooth={true}
            sduration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" smooth={true}
            sduration={500}>
            Contact
          </Link>
        </li>
      </ul>


      <div className='md:hidden z-10 ' onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <Menu />}
      </div>
      {/* mobile */}

      {open && <ul className=' absolute top-0 left-0 w-full h-screen bg-[#0a192f] justify-center flex flex-col items-center animate-slideIn '>
        <li className=' py-7 text-4xl'>
          <Link onClick={() => setOpen(!open)} activeClass="active" to="home" smooth={true}
            sduration={500}>
            Home
          </Link>
        </li>
        <li className=' py-7 text-4xl'>
          <Link onClick={() => setOpen(!open)} activeClass="active" to="about" smooth={true}
            sduration={500}>
            About
          </Link>
        </li>
        <li className=' py-7 text-4xl'>
          <Link onClick={() => setOpen(!open)} activeClass="active" to="skills" smooth={true}
            sduration={500}>
            Skills
          </Link>
        </li>
        <li className=' py-7 text-4xl'>
          <Link onClick={() => setOpen(!open)} activeClass="active" to="work" smooth={true}
            sduration={500}>
            Work
          </Link>
        </li>
        <li className=' py-7 text-4xl'>
          <Link onClick={() => setOpen(!open)} activeClass="active" to="contact" smooth={true}
            sduration={500}>
            Contact
          </Link>
        </li>
      </ul>}


      {/* social icons */}
      <div className=' lg:flex hidden fixed top-[35%] left-0'>
        <ul>
          <li className='w-[120px] h-16 flex justify-between items-center ml-[-66px] hover:ml-[-10px] duration-300 bg-blue-950'>
            <a href="https://github.com/asenadaniel" className=' flex justify-between items-center w-full  '>
              GitHub <GitHub />
            </a>
          </li>
          <li className='w-[120px] h-16 flex justify-between items-center ml-[-66px] hover:ml-[-10px] duration-300 bg-black'>
            <a href="https://www.linkedin.com/in/daniel-asena-972121261/" className=' flex justify-between items-center w-full  '>
              Linked <LinkedIn />
            </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
