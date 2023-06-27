'use client'

import { PDFGenerator } from '@/components/PDFGenerator'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Page() {

  const pathname = usePathname()
  
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

  return (
    <PDFGenerator id={Number(getIdPath())} />
  )
}
