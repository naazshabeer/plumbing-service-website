"use client";

import { motion } from 'motion/react'
import * as variants from '@/app/motion/animation'

import React from 'react'
import Image from 'next/image'
import { socialIcons, footerList } from '../data/data'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='pt-20 pb-10'>
      <motion.div 
       variants={variants.staggerContainer}
       initial='hidden' 
       whileInView='show'
       viewport={{ once: true }}
       className="container"
      >
        {/* Footer top */}
        <div className='space-y-8 sm:grid sm:grid-cols-2
        sm:gap-6 lg:grid-cols-[1fr_0.7fr_0.9fr_0.7fr]'>
          {/* Footer brand */}
          <motion.div variants={variants.fadeInUp}
           className='space-y-4'>
            <span>
              <Image 
                src={'/image/footer-logo.png'}
                alt='footer logo'
                width={79}
                height={40}
              />
            </span>
            <p className='mt-2.5'>Quality plumbing solutions for homes and businesses.</p>


            {/* Social links */}
            <div className='flex items-center gap-5'>
              {socialIcons.map((item) => (
                <a
                  href='#'
                  className='hover:text-primaryClr transition-colors'
                  key={item.id}
                >
                  <item.icon size={30} />
                </a>
              ))}
            </div>
          </motion.div>
          {/* Footer list */}
          {footerList.map((item) => (
            <motion.div variants={variants.fadeInUp} key={item.id}>
              <p className='font-semibold'>{item.title}</p>
              <ul className='space-y-1.5 mt-3'>
               {item.list.map((label, index) => (
                <li key={index}>
                  {item.id === 3 ? (
                    <Link href={`/${label}`}
                    className='hover:underline'>
                      {label}
                    </Link>
                  ) : (
                    <a href='#' className='hover:underline'>
                      {label}
                    </a>
                  )}  
                </li>
               ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* Footer bottom */}
        <motion.p variants={variants.fadeInUp} className='mt-14'>
           &copy; {new Date().getFullYear()}
            Made with Naaz Shabeer.All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  )
}
