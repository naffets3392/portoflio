import SkillsComponent from '@/components/skillsComponent/SkillsComponent'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'My Skills'
}



function SkillsPage() {
  return (
    <div>
        <SkillsComponent />
    </div>
  )
}

export default SkillsPage