// import Image fro}m 'next/image'

'use client'

import { useState } from "react"

export default function Home() {
  
  //Cambiar el any
  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-[24px]" onSubmit={onSubmit}>
      
      <form className='shadow-lg gap-4'>
      
        <h2 className="text-[22px] sm:text-[24px] font-bold mb-4">Formulario para creación de perfil público de adulto mayor</h2>
      
        <input type="text" className="border" placeholder="Nombre" />
        
        <input type="text" className="border" placeholder="Apellido" />
        
        <input type="tel" className="border" placeholder="Número de contacto" />
        
        <input type="text" className="border" placeholder="Dirección" />
        
        <button className="w-full rounded-[15px] bg-blue-400 hover:opacity-90 py-[6px] font-bold">Enviar</button>
        
      </form>
      
    </main>
  )
}
