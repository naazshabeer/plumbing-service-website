"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import Image from 'next/image'
import { navItems } from '../data/data'
import { RiCloseFill, RiMenuFill } from '@remixicon/react'
import { usePathname } from 'next/navigation';
import { RemoveScroll } from 'react-remove-scroll';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  return (
    <header className='absolute top-0 left-0 bg-primaryClr
    w-full py-5 text-white z-40'>
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <Link href={'/'}>
        <Image 
          src={'/image/logo.png'} 
          alt='logo'
          width={95} 
          height={50}
          priority
        />
        </Link>

        {/* Mobile Menu */}
        <RemoveScroll enabled={isOpen}>
        <nav className={`lg:hidden fixed top-0 left-0 bg-white
          h-screen w-full text-black flex flex-col items-center
          justify-center transition-transform 
          ${isOpen ? "translate-y-0" : " -translate-y-full"}`}
        >

          {/* list */}
          <ul className='space-y-7 text-center'>
            {navItems.map(item => (
              <li key={item.id}>
                <Link 
                  href={item.href} 
                  className={`text-xl font-semibold
                   link ${pathname === item.href ? "after:!w-full" : ""}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Btn */}
          <Link 
            href={'/contact'} 
            className='primary-btn mt-10 text-lg'
            onClick={handleClick}
          >
            Contact
          </Link>
        </nav>
        </RemoveScroll>
        {/* Desktop Menu */}
        <nav className='hidden lg:flex items-center gap-10'>
          {/* list */}
          <ul className='flex gap-10'>
            {navItems.map(item => (
              <li key={item.id}>
                <Link 
                  href={item.href} 
                  className={`link font-semibold after:!bg-secondaryClr
                   hover:text-secondaryClr 
                  ${pathname === item.href 
                   ? "after:!w-full text-secondaryClr"
                   : ""}`}
                   onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Btn */}
          <Link 
            href={'/contact'} 
            className=' primary-btn'>
           Contact
          </Link>
        </nav>
        {/* Menu btn */}
        <button className='lg:hidden w-12 h-12 bg-secondaryClr
        text-primaryClr flex items-center justify-center rounded-full
        relative top-0 right-0 active:bg-secondaryClr/90 p-1.5'
        onClick={handleClick}
        >
         {isOpen ? <RiCloseFill  size={30} /> :  <RiMenuFill size={30} />}
        </button>
      </div>
    </header>
  )
}
