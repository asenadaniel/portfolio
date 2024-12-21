import React from 'react'

// function Contact() {
//   return (
//     <div className=' w-full  bg-[#0a192f] h-screen flex justify-center items-center p-5' id='contact'>

//       <form method='POST' action='https://getform.io/f/pagxqxxb' className=' flex flex-col max-w-[600px] w-full'>
//         <div className='pb-8'>
//           <p className=' text-gray-300 text-4xl font-bold inline border-b-4 border-black  '>
//             Contact
//           </p>
//           <p className=' py-4 text-gray-300'>Submit the form below</p>
//         </div>
//         <input className='p-3  text-white  bg-gray-500 outline-none ' type="text" placeholder='Name' name='name' />
//         <input className=' my-4 p-3 text-white  outline-none bg-gray-500' type="email" placeholder='Email' name='email' />
//         <textarea name="message" placeholder='Message' rows={10} className=' p-3 text-white outline-none  bg-gray-500 ' />

//         <button className=' text-white border-2 mt-8 hover:border-black hover:bg-black px-4 py-3 flex justify-center items-center  '>Lets connect</button>
//       </form>

//     </div>
//   )
// }

// export default Contact

import { useForm, ValidationError } from '@formspree/react';
import Thanks from '../Thanks.jsx/Thanks';

function Contact() {
  const [state, handleSubmit] = useForm("mvggpkjo");

  return (
    <div className=' w-full  bg-[#0a192f] h-screen flex justify-center items-center p-5' id='contact'>
      <form onSubmit={handleSubmit} method='POST' action='https://formspree.io/f/mvggpkjo' className=' flex flex-col max-w-[600px] w-full'>

        <div className=' pb-9'>
          <p className=' text-gray-300 text-4xl font-bold inline border-b-4 border-black  '>
            Contact
          </p>
          <p className=' py-4 text-gray-300'>Submit the form below</p>
        </div>
        {/* <label htmlFor="email" className=' text-white'>
          Email Address
        </label> */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder='Email'
          className=' my-4 p-3 text-white  outline-none bg-gray-500'
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        {/* <label htmlFor="message" className=' text-white pb-5'>
          Message
        </label> */}
        <textarea
          id="message"
          name="message"
          className=' p-3 text-white outline-none  bg-gray-500 '
          placeholder='Message'
          rows={10}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className=' text-white border-2 mt-8 hover:border-black hover:bg-black px-4 py-3 flex justify-center items-center  '>
          Submit 😊
        </button>
        {state.succeeded ? <Thanks /> : null}
      </form>
    </div>
  );
}

export default Contact