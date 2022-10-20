import { css } from 'styled-components'

export const css_CircleWithIcon = css`
  --size: 2rem;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;

  /** icon size */
  font-size: calc(var(--size) * 0.64);

  /** centering */
  display: flex;
  justify-content: center;
  align-items: center;
`
