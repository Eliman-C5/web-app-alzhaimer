import { ReactNode } from 'react';

export interface PropChildren {
  children: ReactNode
}

export type NavbarProps = {
  src: string,
  name: string
}[]

export type inputProps = {
  id: number,
  placeholder: string,
  type: string,
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type userProps = {
  username: string,
  adultname: string,
  adultage: number | null,
  userphone: number | null,
  image: string,
  genre: string,
  illnes: string,
  adultAddress: string,
  id: number
}