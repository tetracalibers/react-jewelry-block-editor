import { blockConf } from '../../../core/config'

export const Toolbar = () => {
  return (
    <>
      {blockConf.map((block) => (
        <button key={block.type}>{block.icon}</button>
      ))}
    </>
  )
}
