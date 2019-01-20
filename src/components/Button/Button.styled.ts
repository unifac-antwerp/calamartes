import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

type TButtonProps = {
  theme: TTheme
  light: boolean
}

export const Button = styled.button`
  border: none;
  background-color: ${({ theme, light }: TButtonProps) => (light ? theme.colors.neutral01 : theme.colors.global02)};
  padding: 8px 24px;

  color: ${({ theme, light }: TButtonProps) => (light ? theme.colors.global02 : theme.colors.neutral01)};
  font-family: ${({ theme }: TButtonProps) => theme.typo.fonts.heading};
  font-size: 16px;

  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, light }: TButtonProps) => (light ? theme.colors.neutral04 : theme.colors.global03)};
  }
`
