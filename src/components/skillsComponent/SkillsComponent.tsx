"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function SkillsComponent() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className='flex flex-col items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-1 text-slate-50 text-center gap-5'>
                <div>
                    <h1 className='mb-1 text-lime-300 text-2xl'>WEB TECHNOLOGIES:</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-1 text-lime-300 text-2xl'>LANGUAGES:</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-1 text-lime-300 text-2xl'>FRAMEWORKS/</h1>
                    <h1 className='mb-1 text-lime-300 text-2xl'>LIBRARIES:</h1>
                    <ul>
                        <li>React.JS</li>
                        <li>Next.JS</li>
                        <li>TailwindCSS</li>
                        <li>MaterialUI</li>
                        <li>Flowbite</li>
                        <li>DaisyUI</li>
                        <li>Framer-Motion</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-1 text-lime-300 text-2xl'>TOOLS:</h1>
                    <ul>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
            </div>
            <div className='mt-5'>
                <Link href='/'><button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button></Link>
            </div>
        </motion.div>
    </div>
  )
}

export default SkillsComponent