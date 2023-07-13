"use client"

import React, { useEffect, useRef, useState } from 'react'
// import QRCode from 'react-qr-code'
import { redirect, usePathname } from 'next/navigation';
import { userProps } from '@/interfaces/app_interfaces';
import { client } from '@/sanity/schemas';
// import Link from 'next/link';
import Image from 'next/image';
import { getIdPath } from '@/helpers/getIdPath';

export default function Page ({}) {

  const pathname = usePathname();
  
  const [users, setUsers] = useState<userProps[]>([])
  const [profileID, setProfileID] = useState<number>(404)
  
  useEffect(() => {
  
    client.fetch('*[_type == "users"]')
    .then(res => {
      
      console.log(res, pathname)
      
      setUsers(res)
      
      setProfileID(Number(getIdPath(pathname)))
      
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
            <Image 
              src={user.image}
              width={500}
              height={500}
              className='w-full max-w-[250px] max-h-[250px] sm:max-w-[500px] sm:max-h-[500px]'
              alt='Imagen de perfil de usuario'
            />            
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
          
          {/* <Link href={`/pdf/${profileID}`} target='_blank' className='rounded-[15px] bg-blue-400 text-white hover:opacity-90 py-[6px] px-[10px] mx-auto flex w-4/5 md:w-2/5 justify-center mt-8 font-bold'>
            Descargar PDF
          </Link> */}
          
        </div>)
      
      ))
    }
    </>
  )
}