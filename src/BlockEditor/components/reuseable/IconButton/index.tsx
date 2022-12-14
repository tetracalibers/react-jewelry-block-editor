import { cloneElement, ForwardedRef, forwardRef } from 'react'
import { IconButtonProps } from './model'
import { Button } from '@/BlockEditor/components/reuseable/Button'
import { VisuallyHidden } from '@/BlockEditor/components/reuseable/VisuallyHidden'

const _IconButton = (
  { icon, label, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Button ref={ref} {...props}>
      {cloneElement(icon, { 'aria-hidden': true })}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  )
}

export const IconButton = forwardRef(_IconButton)
