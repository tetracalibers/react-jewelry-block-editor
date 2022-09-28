import { DollarProps } from '@/types/DollarProps'
import styled, { css } from 'styled-components'
import { ButtonProps } from './model'

const css_ResetButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  font-size: 1rem;
`

export const EnhancedButton = styled.button<
  Pick<DollarProps<ButtonProps>, '$cssReset'>
>`
  ${(props) => props.$cssReset && css_ResetButton}
`
