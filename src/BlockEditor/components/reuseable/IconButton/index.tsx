import { ForwardedRef, forwardRef } from 'react'
import { IconButtonProps } from './model'
import { Button } from '@/BlockEditor/components/reuseable/Button'

const _IconButton = (
  { icon, label, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Button ref={ref} {...props}>
      {icon}
      {label}
    </Button>
  )
}

export const IconButton = forwardRef(_IconButton)
