import { ForwardedRef, forwardRef } from 'react'
import { IconButtonProps } from './model'
import { Button } from '@/BlockEditor/components/reuseable/Button'

const _IconButton = (
  { icon, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Button ref={ref} {...props}>
      {icon}
    </Button>
  )
}

export const IconButton = forwardRef(_IconButton)
