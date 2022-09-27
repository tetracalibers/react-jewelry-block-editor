import { ReactElement, ReactNode } from 'react'
import { BiParagraph } from 'react-icons/bi'

// ブロック名の配列（新しいブロックをつくる時に追加していく）
const blockType = ['paragraph'] as const

// ブロック名のUnion型
export type BlockType = typeof blockType[number]

// ブロックがinline要素かblock要素か
// bothならinline <-> blockの変換が可能
export type BoxType = 'inline' | 'block' | 'both'

// format関数の引数（ブロックによって異なる、随時追加）
export type FormatArgs = {
  paragraph: {
    input: string
    boxType: 'inline' | 'block'
  }
}

// ブロックオブジェクト
export type Block<T extends BlockType> = {
  type: T
  icon: ReactElement
  boxType: BoxType
  format: (args: FormatArgs[T]) => ReactNode
}

// 全ブロックオブジェクトのコレクション
export type Blocks = Block<BlockType>[]

// format関数の引数初期値
export const init: FormatArgs = {
  paragraph: {
    input: '',
    boxType: 'inline'
  }
}

// ブロック設定
export const blockConf: Blocks = [
  {
    type: 'paragraph',
    icon: <BiParagraph />,
    boxType: 'both',
    format: ({ input, boxType } = { ...init.paragraph }) => {
      return <p>{input}</p>
    }
  }
]
