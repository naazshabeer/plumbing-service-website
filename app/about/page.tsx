import React from 'react'
import AboutUs from './sections/AboutUs'
import OurStory from './sections/OurStory'
import OurTeams from './sections/OurTeams'
import OurFoundation from './sections/OurFoundation'
import Testimonials from '../components/Testimonials'

export default function AboutPage() {
  return (
    <>
     <AboutUs /> 
     <OurStory />
     <OurTeams />
     <OurFoundation />
     <Testimonials />
    </>
  )
}