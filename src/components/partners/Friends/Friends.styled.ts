import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

export const Wrap = styled.section``

export const Title = styled.h2`
  color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  margin: 64px 0 48px;
`

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ListItem = styled.li``
