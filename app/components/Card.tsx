"use client";

import { motion } from 'motion/react'
import * as variants from '@/app/motion/animation'

import React from 'react'
import Image from 'next/image';

interface cardProps {
    id: string;
    title: string;
    text: string;
    icon: string;
}

export default function Card({id, title, text, icon}:
     cardProps) {
  return (
    <motion.div 
     variants={variants.fadeInUp}
     className=' bg-grayClr border border-primaryClr rounded-2xl 
     px-7 flex flex-col py-9'
    >
      <h3 className='card-title'>{title}</h3>
      <p className='mt-4 mb-6'>{text}</p>
      <div className='flex items-center justify-between mt-auto'>
        <span className='shrink-0'>
            <Image 
              src={icon} 
              alt={title} 
              width={70}
              height={70}
            />
        </span>
        <h4 className='text-6xl lg:text-7xl font-bold text-outline'>{id}.</h4>
      </div>
    </motion.div>
  )
}
