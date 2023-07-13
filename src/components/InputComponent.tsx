import React from 'react'

type inputProps = {
  type: string,
  placeholder: string,
  pattern: string,
  maxLength: number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputComponent = ({type, placeholder, onChange, pattern, maxLength}: inputProps) => {
  return (
    <input 
      className='border' 
      required 
      placeholder={placeholder} 
      type={type} 
      onChange={onChange}
      pattern={pattern}
      maxLength={maxLength}
    />
  )
}
