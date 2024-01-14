import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
  return (
  <section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center '>

<SectionHeading>Contact me</SectionHeading>
<p className='text-gray-700'>Pease contact me directly at <a className='underline' href='mailto:mayankpratapsingh022@gmail.com'>mayankpratapsingh022@gmail.com</a> <br></br> or through this form. </p>
 <form className='mt-10 flex flex-col'>
    <input className='h-14 px-4 rounded-lg borderBlack' type='email'
    placeholder='Your email'
    />
    <textarea placeholder=' Your message' className='h-52 my-3 rounded-lg borderBlack p-4'/>
    <button type='submit' className=' group flex h-[3rem] w-[8rem] items-center gap-2 justify-center bg-gray-900 text-white rounded-full  focus:scale-110 hover:scale-110 active:scale-105 outline-none transition-all hover:bg-gray-950'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/> {" "}</button>
 </form>
 
  </section>
  )
}

export default Contact