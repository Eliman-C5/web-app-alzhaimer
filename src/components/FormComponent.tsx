import { FormContext } from '@/context/FormProvider'
import { inputProps } from '@/interfaces/app_interfaces'
import React, { useContext, useEffect } from 'react'
import { InputComponent } from './InputComponent'
import { useRouter } from 'next/navigation'
import { UploadImage } from './UploadImage'
import QRCode from 'react-qr-code'
import { GenreCheckboxes } from './GenreCheckboxes'

type formComponentTypes = {
  onSubmit: any,
  profilePage: string,
  isDataCorrect: boolean
}

export const FormComponent = ({onSubmit, profilePage, isDataCorrect}: formComponentTypes) => {

  const {datosFormulario, setDatosFormulario} = useContext(FormContext)

  const inputsInfo: inputProps[] = [
    {
      id: 1,
      placeholder: 'Nombre del responsable',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormulario({...datosFormulario, username: e.target.value})
    },
    {
      id: 2,
      placeholder: 'Nombre del adulto mayor',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormulario({...datosFormulario, adultname: e.target.value})
    },
    {
      id: 3,
      placeholder: 'Edad del adulto mayor',
      type: 'number',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormulario({...datosFormulario, adultage: e.target.valueAsNumber})
    },
    {
      id: 4,
      placeholder: 'Número de contacto de el responsable',
      type: 'number',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormulario({...datosFormulario, userphone: e.target.valueAsNumber})
    },
    {
      id: 5,
      placeholder: 'Sufre de alguna enfermedad o tiene alguna patología?',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormulario({...datosFormulario, illnes: e.target.value})
    },
    {
      id: 6,
      placeholder: 'Ingresar dirección del lugar de residencia del adulto mayor',
      type: 'string',
      onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => setDatosFormulario({...datosFormulario, adultAddress: e.target.value})
    },
  ]
  
  const router = useRouter();
  
  useEffect(() => {
  
    console.log(datosFormulario.id)
  
    //setDatosFormulario({...datosFormulario, id: Math.round(Math.random() * 10000000)})
  
  })

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
        
        <UploadImage />
        
        <GenreCheckboxes datosFormulario={datosFormulario} setDatosFormulario={setDatosFormulario} />
                
        <button 
          className="w-full rounded-[15px] bg-blue-400 hover:opacity-90 py-[6px] font-bold"
        >
          Enviar
        </button>
        
      </form>
      
      <div className={`${isDataCorrect ? 'block' : 'hidden'} mt-8 flex flex-col gap-4`}>
        <button 
          onClick={() => router.push(profilePage)} 
          className={`rounded-[15px] bg-blue-400 text-white hover:opacity-90 py-[6px] font-bold`}
        >
          Ir a la página de perfil del usuario
        </button>
        <p className='text-center'>o</p>
        <div className="bg-[#e4e4e4] p-4 my-8">
          <QRCode value={`https://web-app-alzhaimer.vercel.app/profile/${datosFormulario.id}`} className='mx-auto' />
        </div>
      </div>
      
    </main>
  )
}
