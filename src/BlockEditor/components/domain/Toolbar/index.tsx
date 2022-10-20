import { blockConf } from '@/BlockEditor/core/config'
import { AddButton } from '@/BlockEditor/components/buttons/AddButton'

export const Toolbar = () => {
  return (
    <>
      {blockConf.map((block) => (
        <AddButton type={block.type} icon={block.icon} key={block.type} />
      ))}
    </>
  )
}
