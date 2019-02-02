import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

export const Wrap = styled.footer`
  margin-top: 40px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global04};
  color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  padding: 24px;
  font-size: 14px;
`

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MadeBy = styled.span`
  align-self: flex-end;
  font-size: 12px;
`
