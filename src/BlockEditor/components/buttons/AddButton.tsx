import { BlockType } from '@/BlockEditor/core/config'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { IconButton } from '@/BlockEditor/components/reuseable/IconButton'
import { css_DripShadow } from './styles/dripShadow'
import { css_CircleWithIcon } from './styles/circleWithIcon'

const StyledIconButton = styled(IconButton)`
  ${css_CircleWithIcon}
  ${css_DripShadow}
  
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
  color: #ffffff80;

  && svg {
    filter: drop-shadow(1px 1px 10px white);
  }
`

type AddButtonProps = {
  type: BlockType
  icon: ReactElement
}

export const AddButton = ({ type, icon }: AddButtonProps) => {
  return (
    <StyledIconButton label={`add ${type} block`} icon={icon} cssReset={true} />
  )
}
