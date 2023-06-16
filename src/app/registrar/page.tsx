'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import {useState} from 'react'

export default function Page() {
  
  const [profilePage, setProfilePage] = useState<string>('/404');
  const [isDataCorrect, setIsDataCorrect] = useState<boolean>(false);
  const [customURL, setCustomURL] = useState<number>(Math.round(Math.random() * 10000000))

  //Cambiar el any
  const onSubmit = (e: any) => {
    e.preventDefault();
    
    console.log(customURL);
    
    setProfilePage(`/profile/${customURL}`)
    
    setIsDataCorrect(true);
    
    // HACER QUE CAMBIE EL CUSTOMURL PARA QUE DE EL VALOR POR DEFECTO DE QUE LA PAGINA NO EXISTE
    // setCustomURL(Math.round(Math.random() * 10000000))
    
    // console.log(customURL, 'nuevo');
  }
  
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-[24px]" onSubmit={onSubmit}>
      
      <form className='shadow-lg gap-4'>
      
        <h2 className="text-[22px] sm:text-[24px] font-bold mb-4">Formulario para creación de perfil público de adulto mayor</h2>
      
        <input type="text" required className="border" placeholder="Nombre del responsable" name='responsable-nombre'/>
        
        <input type="text" required className="border" placeholder="Nombre del adulto mayor" name='adulto-nombre' />
        
        <input type="text" required className="border" placeholder="Edad del adulto mayor" name='adulto-edad' />
        
        <input type="tel" required className="border" placeholder="Número de contacto del responsable" name='numero-contacto' />
        
        <input type="file" name="imagen" id="imagen" accept="image/png, image/jpeg" />
        
        <fieldset>
          <legend>Seleccionar género de el adulto</legend>
          
          <div className="">
            <input type="checkbox" id="masculino" name="masculino" />
            <label>Másculino</label>
          </div>
          
          <div className="">
            <input type="checkbox" id="femenino" name="femenino" />
            <label>Femenino</label>
          </div>
          
        </fieldset>
        
        <input type="text" required className='border' placeholder='Sufre de alguna enfermedad o tiene alguna patología?' name="patologia" />
        
        <input type="text" required className="border" placeholder="Ingresar dirección del lugar de residencia del adulto mayor" name='direccion' />
        
        <button className="w-full rounded-[15px] bg-blue-400 hover:opacity-90 py-[6px] font-bold">Enviar</button>
        
      </form>
      
      <button 
        onClick={() => router.push(profilePage)} 
        className={`rounded-[15px] bg-blue-400 text-white hover:opacity-90 py-[6px] font-bold ${isDataCorrect ? 'block' : 'hidden'} `}
      >
      Ir a la página de perfil del usuario
      </button>
      
    </main>
  )
}
