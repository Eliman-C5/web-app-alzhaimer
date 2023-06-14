'use client'

import React from 'react'
import { PDFGenerator } from '@/components/PDFGenerator';

export default function Page ({params}: { params: {id: string} }) {
  return (
    <div>
    
    Page {params.id}
    
    <PDFGenerator id={params.id}/>
    
    </div>
  )
}
