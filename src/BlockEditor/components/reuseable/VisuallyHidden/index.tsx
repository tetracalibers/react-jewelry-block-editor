import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react'
import { InvisibleContainer } from './styled'

type VisuallyHiddenProps = ComponentPropsWithRef<'div'>

const _VisuallyHidden = (
  { children, ...props }: VisuallyHiddenProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <InvisibleContainer {...props} ref={ref}>
      {children}
    </InvisibleContainer>
  )
}

export const VisuallyHidden = forwardRef(_VisuallyHidden)
