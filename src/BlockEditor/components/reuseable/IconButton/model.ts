import { ComponentPropsWithRef, ReactElement } from 'react'

export interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  // childrenは値を持たない(never) -> 指定不可
  children?: never
  // childrenの代わりにiconというpropsを提供
  icon: ReactElement
  // 内部で使うButtonコンポーネントに渡す
  cssReset?: boolean
  // 何のボタンなのかを表すラベル(必須)
  label: string
}
