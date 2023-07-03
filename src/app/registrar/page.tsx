'use client'

import { FormComponent } from '@/components/FormComponent'
import { FormContext } from '@/context/FormProvider'
import { client } from '@/sanity/schemas'
import React, { useState, useContext } from 'react'

export default function Page() {
  
  const [profilePage, setProfilePage] = useState<string>('/404');
  const [isDataCorrect, setIsDataCorrect] = useState<boolean>(false);
  
  const {datosFormulario, setDatosFormulario, images} = useContext(FormContext)
  
  //Cambiar el any
  const onSubmit = (e: any) => {
    e.preventDefault();
    
    console.log(datosFormulario.id, images)
    
    //Creando el doc
    const doc = {
      _type: 'users',
      id: datosFormulario.id,
      username: datosFormulario.username,
      adultname: datosFormulario.adultname,
      adultage: datosFormulario.adultage,
      adultAddress: datosFormulario.adultAddress,
      image: images,
      genre: datosFormulario.genre,
      illnes: datosFormulario.illnes,
      userphone: datosFormulario.userphone
    }
    
    // Envía los datos a Sanity
    client.create(doc)
    .catch(error => console.log(error));
    
    //Trae los datos de Sanity
    client.fetch('*[_type == "users"]').then(res => console.log(res))
    
    //Establecer el id de la pagina de perfil
    setProfilePage(`/profile/${datosFormulario.id}`)
    
    //Mostrar boton que redirige a la pagina de perfil
    setIsDataCorrect(true);
  
    //Cambiar id por si quieren volver a registrar a alguien
    setDatosFormulario({...datosFormulario, id: Math.round(Math.random() * 10000000)})
    
    console.log(datosFormulario.id, 'nuevo');
  }

  return (
    <FormComponent 
      onSubmit={onSubmit} 
      profilePage={profilePage} 
      isDataCorrect={isDataCorrect} 
    />
  )
}