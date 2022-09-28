import { blockConf } from '@/BlockEditor/core/config'

export const Toolbar = () => {
  return (
    <>
      {blockConf.map((block) => (
        <button key={block.type}>{block.icon}</button>
      ))}
    </>
  )
}
