"use client"

import React from 'react'
import { projects } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

function ProjectsComponent() {
  return (
    <div className='flex justify-center items-center min-h-screen p-10 text-white text-center'>
       <motion.div initial={{scale: 0}} animate={{scale: 1}} className='flex flex-col items-center w-10/12'>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-between'>
              {projects.map(project => {
                return <div className='border-2 rounded-md p-3'>
                  <h1>{project.title}</h1>
                  <h3>{project.description}</h3>
                  <div className='relative h-[20vh] w-[100%] my-3'>
                    <Image src={project.image} fill objectFit='contain' alt='project image'/>
                  </div>
                  <Link target='_blank' href={project.github}><button type="button" className="mt-3 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub</button></Link>
                </div>
              })}
            </div>
            <div>
              <Link href='/'><button type="button" className="mt-5 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button></Link>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectsComponent