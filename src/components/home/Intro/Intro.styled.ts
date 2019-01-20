import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const Wrap = styled.section`
  display: flex;
  position: relative;
  z-index: 15;
  margin: 96px auto 64px !important;
`

export const TextWrap = styled.div`
  ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};
  padding: 24px;
  flex: 5;
  position: relative;
  top: -164px;
`

export const Text = styled.div``

export const ImageWrap = styled.div`
  flex: 4;
  max-height: 400px;
  ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
