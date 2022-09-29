import { ForwardedRef, forwardRef } from 'react'
import { IconButtonProps } from './model'
import { Button } from '@/BlockEditor/components/reuseable/Button'
import { VisuallyHidden } from '@polym/a11y'

const _IconButton = (
  { icon, label, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Button ref={ref} {...props}>
      {icon}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  )
}

export const IconButton = forwardRef(_IconButton)
