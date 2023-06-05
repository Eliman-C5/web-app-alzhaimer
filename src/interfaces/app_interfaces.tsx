import { ReactNode } from 'react';

export interface PropChildren {
  children: ReactNode
}

export type NavbarProps = {
  src: string,
  name: string
}[]