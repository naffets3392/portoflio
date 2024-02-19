"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function HomeComponent() {
  return (
    <div className='flex justify-center items-center min-h-screen p-10'>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className='flex items-center flex-col xl:flex-row gap-5'>
            <div className='h-[270px] w-[270px] rounded-full overflow-hidden relative border-solid border-8 border-slate-700'>
                <Image src="/ZAVRSNAverzija.jpeg" fill alt='profile image' objectFit='cover' objectPosition='top'/>
            </div>
            <div className='text-slate-50 text-center'>
                <h1 className='text-3xl mb-5'>Front-End Developer</h1>
                <h5 className='flex-wrap'>Well-versed in JavaScript, React, and Next.js, actively acquire new knowledge daily.</h5>
                <h5>Currently delving into MongoDB and Mongoose, to broaden skill set for full-stack development.</h5>
                <h5>Committed to continuous improvement, eager to contribute skills and enthusiasm to innovative projects, ready to add value to the teams I work with.</h5>
                <div className='mt-5 flex gap-5 justify-center'>
                    <Link href='/skills'><button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Skills</button></Link>
                    <Link href='/projects'><button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Projects</button></Link>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default HomeComponent