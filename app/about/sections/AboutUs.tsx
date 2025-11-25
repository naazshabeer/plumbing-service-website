"use client";

import { motion } from 'motion/react'
import * as variants from '@/app/motion/animation'

import Title from '@/app/components/Title'
import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className='pt-32 lg:pt-40'>
      <motion.div 
       variants={variants.staggerContainer}
       initial='hidden' 
       whileInView='show'
       viewport={{ once: true }}
       className="container space-y-10 lg:space-y-14"
      >
        {/* Title */}
        <Title 
          subtitle='About Us'
          title='Delivering Reliable Solutions for Over 15 Years'
          text='Since 2009, Plufi has been a trusted plumbing 
          partner, serving thousands of satisfied customers 
          in our community.'
          classes='max-w-xl lg:max-w-[655px] text-center mx-auto'
        />
        {/* Image */}
        <motion.div variants={variants.fadeIn}
         className='max-w-max mx-auto'>
            <Image 
              src={'/image/about-page-banner.png'}
              alt='about page banner'
              width={1195}
              height={527}
            />
        </motion.div>
      </motion.div>
    </section>
  )
}
