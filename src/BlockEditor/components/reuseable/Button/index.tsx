import { ForwardedRef, forwardRef } from 'react'
import { ButtonProps } from './model'
import { EnhancedButton } from './styled'

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
