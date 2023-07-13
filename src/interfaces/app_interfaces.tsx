import { ChangeEvent, ReactNode } from 'react';

export interface PropChildren {
  children: ReactNode
}

export type NavbarProps = {
  src: string,
  name: string
}[]

export type propChildren = {
  children: ReactNode
}

export type inputProps = {
  id: number,
  placeholder: string,
  type: string,
  pattern?: string,
  maxLength?: number,
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type userProps = {
  username: string,
  adultname: string,
  adultage: number | null,
  userphone: number | null,
  image: string | ChangeEvent<HTMLInputElement> | null | FileList | any,
  genre: string,
  illnes: string,
  adultAddress: string,
  id: number
}

export type formTypes = {
  datosFormulario: userProps,
  setDatosFormulario: React.Dispatch<React.SetStateAction<userProps>>,
  images: string | ChangeEvent<HTMLInputElement> | null | FileList | any,
  setImages: React.Dispatch<any>
}