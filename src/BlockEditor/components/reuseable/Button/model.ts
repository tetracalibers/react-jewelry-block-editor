import { ComponentPropsWithRef, ReactNode } from 'react'

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  cssReset?: boolean
  children: ReactNode
}
