'use client'

import { InputComponent } from '@/components/InputComponent'
import { inputProps, userProps } from '@/interfaces/app_interfaces'
import { client } from '@/sanity/schemas'
import { useRouter } from 'next/navigation'
import React from 'react'
import {useState} from 'react'

export default function Page() {
  
  const [profilePage, setProfilePage] = useState<string>('/404');
  const [isDataCorrect, setIsDataCorrect] = useState<boolean>(false);
  const [datosFormulario, setDatosFormularios] = useState<userProps>({
    username: '',
    adultname: '',
    adultage: null,
    userphone: null,
    image: '',
    genre: '',
    illnes: '',
    adultAddress: '',
    id: Math.round(Math.random() * 10000000)
  })
  const [value, setValue] = useState<string>()

  //Cambiar el any
  const onSubmit = (e: any) => {
    e.preventDefault();
    
    console.log(datosFormulario.id, value)
    
    const doc = {
      _type: 'users',
      id: datosFormulario.id,
      username: datosFormulario.username,
      adultname: datosFormulario.adultname,
      adultage: datosFormulario.adultage,
      adultAddress: datosFormulario.adultAddress,
      genre: datosFormulario.genre,
      illnes: datosFormulario.illnes,
      userphone: datosFormulario.userphone
    }
    
    // Envía los datos a Sanity
    client.create(doc)
    .catch(error => console.log(error));
    
    client.fetch('*[_type == "users"]').then(res => console.log(res))
    
    setProfilePage(`/profile/${datosFormulario.id}`)
    
    setIsDataCorrect(true);
  
    setDatosFormularios({...datosFormulario, id: Math.round(Math.random() * 10000000)})
    
    console.log(datosFormulario.id, 'nuevo');
  }
  
  const router = useRouter();
  
  const inputsInfo: inputProps[] = [
    {
      id: 1,
      placeholder: 'Nombre del responsable',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormularios({...datosFormulario, username: e.target.value})
    },
    {
      id: 2,
      placeholder: 'Nombre del adulto mayor',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormularios({...datosFormulario, adultname: e.target.value})
    },
    {
      id: 3,
      placeholder: 'Edad del adulto mayor',
      type: 'number',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormularios({...datosFormulario, adultage: e.target.valueAsNumber})
    },
    {
      id: 4,
      placeholder: 'Número de contacto de el responsable',
      type: 'number',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormularios({...datosFormulario, userphone: e.target.valueAsNumber})
    },
    {
      id: 5,
      placeholder: 'Sufre de alguna enfermedad o tiene alguna patología?',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormularios({...datosFormulario, illnes: e.target.value})
    },
    {
      id: 6,
      placeholder: 'Ingresar dirección del lugar de residencia del adulto mayor',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormularios({...datosFormulario, adultAddress: e.target.value})
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-[24px]" onSubmit={onSubmit}>
      
      <form className='shadow-lg gap-4'>
      
        <h2 className="text-[22px] sm:text-[24px] font-bold mb-4">Formulario para creación de perfil público de adulto mayor</h2>
        
        {
          inputsInfo.map(input => <InputComponent 
            type={input.type} 
            placeholder={input.placeholder}
            key={input.id}
            onChange={input.onChangeFn}
          />)
        }
        
        <input type="file" name="imagen" id="imagen" accept="image/png, image/jpeg" onChange={(e) => setValue(e.target.value)} />
        
        <fieldset>
          <legend>Seleccionar género de el adulto</legend>
          
          <div className="">
            <input 
              type="checkbox" 
              id="masculino" 
              name="masculino" 
              onClick={() => setDatosFormularios({...datosFormulario, genre: 'Masculino'})}
            />
            <label>Másculino</label>
          </div>
          
          <div className="">
            <input 
              type="checkbox" 
              id="femenino" 
              name="femenino" 
              onClick={() => setDatosFormularios({...datosFormulario, genre: 'Femenino'})}
            />
            <label>Femenino</label>
          </div>
          
        </fieldset>
        
        <input type="number" name="id" id="id" className='hidden' value={datosFormulario.id} />
        
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
