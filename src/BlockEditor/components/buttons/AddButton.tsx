import { BlockType } from '@/BlockEditor/core/config'
import { ReactElement } from 'react'
import { IconButton } from '@/BlockEditor/components/reuseable/IconButton'

type AddButtonProps = {
  type: BlockType
  icon: ReactElement
}

export const AddButton = ({ type, icon }: AddButtonProps) => {
  return <IconButton label={`add ${type} block`} icon={icon} />
}
