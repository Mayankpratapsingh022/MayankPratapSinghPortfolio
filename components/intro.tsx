"use client"

import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion'

import Link from "next/link";
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithub, FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
export default function Intro() {


 const {ref} =  useSectionInView("Home",0.5);





  return (
    <section ref={ref} id="home" className="mb-2 max-w-[50rem] scroll-mt-[100rem]">
      <div className="flex items-center justify-center ">
        <div className="relative">
            <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                type:"tween",
                duration:0.2,
            }}

            >
          <Image
            width="192"
            height="192"
            src="/mayankProfilepic.jpeg"
            alt="mayank pratap singh portfolio profile image"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] object-cover shadow-xl border-white"
          />
          </motion.div>
             <motion.span className="text-4xl absolute bottom-0 right-0"
             initial={{opacity:0,scale:0}}
             animate={{opacity:1,scale:1}}
             transition={{
                type:'spring',
                stiffness:125,
                delay:0.1,
                duration:0.7,
             }}
             >👋</motion.span>
        </div>
     

      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl  text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mayank.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> {" "}
        <span className="font-bold"></span> I am here to solve 
          <span className="italic"> Real World Problems </span>With{" "}
        <span className="underline">Code.</span>.
      </motion.h1>


<motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"

initial={{opacity:0,y:100}}
animate={{opacity:1,y:0}}
transition={{
    delay:0.2
}}

>

<Link href="#contact" className="bg-gray-900 group text-white px-7 py-3 flex items-center gap-2  rounded-full outline-none focus:scale-110 cursor-pointer hover:scale-110 hover:bg-gray-950 active:scale-105 transition ">Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/></Link>

<a className="bg-white group px-7 py-3 flex items-center gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 border border-black/10 transition cursor-pointer  " href="/MayankPratapSingh_CV.pdf" download={true}>Download CV<HiDownload
className="opacity-60 group-hover:translate-y-1 transition "
/></a>


<a className="bg-white focus:scale-110 hover:scale-[1.15]  hover:text-gray-950 active:scale-[1.15] border border-black/10 transition cursor-pointer    p-4 text-gray-700 flex items-center gap-2  rounded-full " href="https://www.linkedin.com/in/mayankpratapsingh022/" target="_blank">
<BsLinkedin/>

</a>
<a className="bg-white focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] border border-black/10 transition cursor-pointer   p-4 text-[1.35rem] text-gray-700 flex items-center gap-2  rounded-full "  href="https://github.com/Mayankpratapsingh022" target="_blank">
<FaGithubSquare/>

</a>
</motion.div>
    </section>
  );
}
