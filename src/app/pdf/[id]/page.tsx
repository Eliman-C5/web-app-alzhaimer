'use client'

import { PDFGenerator } from '@/components/PDFGenerator'
import { getIdPath } from '@/helpers/getIdPath'
import { userProps } from '@/interfaces/app_interfaces'
import { client } from '@/sanity/schemas'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {

  const pathname = usePathname();
  
  const [users, setUsers] = useState<userProps[]>([])
  
  useEffect(() => {
  
    client.fetch('*[_type == "users"]')
    .then(res => {
      
      console.log(res, pathname)
      
      setUsers(res)
      
    })
  
  })

  return (
    <PDFGenerator id={Number(getIdPath(pathname))} users={users}/>
  )
}
