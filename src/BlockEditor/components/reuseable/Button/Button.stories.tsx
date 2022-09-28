import { ComponentStory } from '@storybook/react'
import { Button } from '.'

// 基本的な情報を定義
export default {
  title: 'reuseable/Button',
  component: Button
}

// 表示確認用コンポーネント(story)を作成
// exportしたコンポーネントが画面に表示される
export const Example: ComponentStory<typeof Button> = ({
  children,
  ...args
}) => <Button {...args}>{children}</Button>

// 初期propsを注入
Example.args = {
  children: 'sample text',
  cssReset: false
}
