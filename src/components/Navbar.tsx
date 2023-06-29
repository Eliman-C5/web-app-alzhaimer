import React from 'react'
import { NavbarProps } from '@/interfaces/app_interfaces'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/alzhaimer-logo.png'


const pages: NavbarProps = [
  {
    src: '/guia',
    name: 'Guía del usuario'
  },
  {
    src: '/registrar',
    name: 'Registrar'
  },
]

export const Navbar = () => {
  return (
    <div className='px-4 border-b shadow-lg flex justify-between items-center'>
    
      <Link href='/'>
        <Image 
          src={Logo}
          alt='Logo de la aplicacion'
          width={100}
          height={100}
          priority
          className='w-10/12 sm:w-full'
        />
      </Link>
      
      
      <div className="flex gap-2 sm:gap-4">
      {
        pages.map(page => 
          <Link href={page.src} key={page.name} className='hover:text-sky-300'>
            {page.name}
          </Link>
        )
      }
      </div>
      
    </div>
  )
}
