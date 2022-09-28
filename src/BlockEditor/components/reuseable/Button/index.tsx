import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { DollarProps } from '@/types/DollarProps'

export const buttonTypeOpt = ['submit', 'reset', 'button'] as const
type ButtonType = typeof buttonTypeOpt[number]

type ButtonProps = ComponentPropsWithRef<'button'> & {
  type: ButtonType
  cssReset: boolean
}

const css_ResetButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  font-size: 1rem;
`

const EnhancedButton = styled.button<
  Pick<DollarProps<ButtonProps>, '$cssReset'>
>`
  ${(props) => props.$cssReset && css_ResetButton}
`

const _Button = (
  { children, type = 'button', cssReset = false, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <EnhancedButton type={type} ref={ref} $cssReset={cssReset} {...props}>
      {children}
    </EnhancedButton>
  )
}

export const Button = forwardRef(_Button)
