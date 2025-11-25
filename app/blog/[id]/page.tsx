"use client"  //let's make this component a client side so we can use motion .dev later on.

import { motion } from 'motion/react'
import * as variants from '@/app/motion/animation'

import React from 'react'

import { blogDetailItems } from '@/app/data/data'
import { notFound } from 'next/navigation'
import { use } from 'react'
import Image from 'next/image'

export default function BlogDetails ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = use(params);
    const post = blogDetailItems.find((item) => item.id === id);

    if(!post) return notFound();

    
  return (
    <section className='py-32 lg:pt-40'>
      <motion.div 
        variants={variants.staggerContainer}
        initial='hidden' 
        whileInView='show'
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10
        md:mb-18 lg:mb-24 space-y-2">
            <motion.h2 variants={variants.fadeInUp}>Blog Detail</motion.h2>
            <motion.p variants={variants.fadeInUp}>
               Discover helpful plumbing tips, maintenance advice,
               and expert insights from the Plufi team.
            </motion.p>
        </div>  
        {/* Image */}
        <motion.div variants={variants.fadeIn}
         className="md:float-left mr-8">
          <Image
            src={post.img} 
            alt={post.title}
            width={361}
            height={243}
            className='rounded-xl'
          />
        </motion.div>
        {/* Content */}
        <motion.div variants={variants.fadeIn}>
            <h2 className="text-3xl font-bold mb-4 text-balance">
                <span>{post.id}.</span>
                {post.title}
            </h2>

            <div className='space-y-5'>
                <p className="float-right">{post.description}</p>
                <div>
                    <h3 className="card-title">Introduction:</h3>
                    <p>{post.intro}</p>
                </div>
            </div>

            {/* list */}
            <div className="space-y-3">
                <h3 className='card-title'>Main Content:</h3>
                <ul className='space-y-4'>
                    {post.list.map(item => (
                        <li key={item.id}>
                            <h3 className="text-lg">{item.title}</h3>
                            <p>{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
