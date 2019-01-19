import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

export const Wrap = styled.section`
  display: flex;
`

export const TextWrap = styled.div`
  ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};
  padding: 24px;
  flex: 3;
`

export const Text = styled.p``

export const ImageWrap = styled.div`
  flex: 2;
  background-color: red;
  ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};
  object-fit: contain;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`
