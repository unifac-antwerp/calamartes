import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

export const Wrap = styled.footer`
  margin-top: 40px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global04};
  color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  padding: 24px 0;
  font-size: 14px;

  a {
    font-size: 14px;
    color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
    text-decoration: none;

    &:hover {
      color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral04};
      text-decoration: underline;
    }
  }
`

export const List = styled.ol`
  > * {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
  margin-bottom: 32px;
`

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MadeBy = styled.span`
  text-align: center;
  display: block;
  font-size: 12px;

  .emoji,
  div {
    display: inline-block;
    width: 12px;
    height: 12px;
  }
`
