import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const [state, handleSubmit] = useForm("mvggpkjo");

  const notify = () => toast.success('In progress!.......');


  return (
    <div className=' w-full  bg-[#0a192f] h-screen flex justify-center items-center p-5' id='contact'>
      <form onSubmit={handleSubmit} method='POST' action='https://formspree.io/f/mvggpkjo' className=' flex flex-col max-w-[600px] w-full'>

        <div className=' pb-9'>
          <p className=' text-gray-300 text-4xl font-bold inline border-b-4 border-black  '>
            Contact
          </p>
          <p className=' py-4 text-gray-300'>Submit the form below</p>
        </div>

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
        <button type="submit" disabled={state.submitting} onClick={notify} className=' text-white border-2 mt-8 hover:border-black hover:bg-black px-4 py-3 flex justify-center items-center  '>
          Submit 😊
        </button>
        {state.succeeded ? toast.success('Form submitted successfully!') : null}
        <ToastContainer />
      </form>
    </div>
  );

}


export default Contact