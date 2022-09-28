import { ComponentStory } from '@storybook/react'
import { BiParagraph } from 'react-icons/bi'
import { IconButton } from '.'

export default {
  title: 'reuseable/IconButton',
  component: IconButton
}

export const Example: ComponentStory<typeof IconButton> = ({
  icon,
  ...args
}) => <IconButton {...args} icon={icon} />

Example.args = {
  icon: <BiParagraph />,
  cssReset: false
}
