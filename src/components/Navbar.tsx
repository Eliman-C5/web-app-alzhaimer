import React from 'react'
import { NavbarProps } from '@/interfaces/app_interfaces'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.jpg'


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
          className='h-[100px] w-[100px]'
        />
      </Link>
      
      
      <div className="flex gap-4">
      {
        pages.map(page => 
          <Link href={page.src} key={page.name}>
            {page.name}
          </Link>
        )
      }
      </div>
      
    </div>
  )
}
