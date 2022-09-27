import { ReactElement, ReactNode } from 'react'

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
