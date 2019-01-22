import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const Wrap = styled.section`
  display: flex;
  position: relative;
  z-index: 15;
  margin: 96px auto 144px !important;
`

export const TextWrap = styled.div`
  ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  padding: 24px;
  flex: 5;
  position: relative;
  top: -164px;
  height: 100%;
  /* border-bottom: 4px solid ${({ theme }: { theme: TTheme }) => theme.colors.global01}; */
`

export const Text = styled.div`
  margin-bottom: 24px;
`

export const ImageWrap = styled.div`
  flex: 4;
  max-height: 400px;
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
