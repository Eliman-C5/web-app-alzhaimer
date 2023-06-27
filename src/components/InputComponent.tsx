import React from 'react'

type inputProps = {
  type: string,
  placeholder: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent = ({type, placeholder, onChange}: inputProps) => {
  return (
    <input 
      className='border' 
      required 
      placeholder={placeholder} 
      type={type} 
      onChange={onChange}
    />
  )
}
