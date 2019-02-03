import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

export const Wrap = styled.section`
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral04};
  margin-bottom: -40px;
  padding: 40px 0;
`

export const InnerWrap = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
