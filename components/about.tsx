'use client'
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'

import { useSectionInView } from '@/lib/hooks'
export default function About() {

  
 const {ref} =  useSectionInView("About");

  return (
   <motion.section
   ref={ref}
   className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
   initial={{opacity:0,y:100}}
   animate={{opacity:1,y:0}}
   transition={{delay:0.175}}
   id='about'
  
   
   >
<SectionHeading >Why me ?</SectionHeading>
<p  className='mb-3'>

﻿
With my skills in coding and AfterEffects animation, I can contribute significantly to creating impactful and innovative solutions, enhancing the overall quality of your company's digital presence and user experiences. My goal is to craft user-friendly, visually appealing, and responsive web applications that leave a lasting impact.
</p>

<p>

</p>


   </motion.section>
  )
}
