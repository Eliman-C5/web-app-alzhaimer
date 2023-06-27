"use client"

import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code'
import { redirect, usePathname } from 'next/navigation';
import { userProps } from '@/interfaces/app_interfaces';
import { client } from '@/sanity/schemas';
import Link from 'next/link';

export default function Page ({}) {

  const pathname = usePathname();
  
  const [users, setUsers] = useState<userProps[]>([])
  const [profileID, setProfileID] = useState<number>(404)
  
  const getIdPath = () => {
  
    const pathArray = pathname.split('')
    
    let idPath = ''
    
    pathArray.map(path => {
      
      path === '0' ||
      path === '1' ||
      path === '2' ||
      path === '3' ||
      path === '4' ||
      path === '5' ||
      path === '6' ||
      path === '7' ||
      path === '8' ||
      path === '9'
    ? 
      idPath += path
    : ''
    
    })
    
    return idPath
  
  }
  
  useEffect(() => {
  
    client.fetch('*[_type == "users"]')
    .then(res => {
      
      console.log(res, pathname)
      
      setUsers(res)
      
      setProfileID(Number(getIdPath()))
      
      console.log(profileID)
      
    })
  
  }, [profileID])
  
  return (
    <>
    {
      users.map((user) => (
      
      user.id === profileID && (
        <div className="w-4/5 mx-auto py-8" key={user.id}>
        
          <div className="">
            <p>1. Este es el perfil de {user.adultname}</p>
            <p>2. De {user.adultage} años de edad</p>
            <p>3. De género {user.genre}</p>
            <ul>
            4. Con las siguientes patologías: 
            <li className='list-disc ml-6'>{user.illnes}</li>
            </ul>
            <p>5. Su responsable es {user.username}.</p>
            <p>6. Número de contacto: {user.userphone}</p>
            <p>7. Dirección: {user.adultAddress}</p>
          </div>  
          
          <div className="bg-[#e4e4e4] p-4 my-8">
            <QRCode value={`https://web-app-alzhaimer.vercel.app/profile/${user.id}`} className='mx-auto' />
          </div>
          
          <Link href={`/pdf/${profileID}`} target='_blank' className='rounded-[15px] bg-blue-400 text-white hover:opacity-90 py-[6px] px-[10px] mx-auto flex w-2/5 justify-center mt-8 font-bold'>
            Descargar PDF
          </Link>
          
        </div>)
      
      ))
    }
    </>
  )
}