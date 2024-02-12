import ProjectsComponent from '@/components/projectsComponent/ProjectsComponent'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects'
}


function ProjectsPage() {
  return (
    <div>
        <ProjectsComponent />
    </div>
  )
}

export default ProjectsPage