import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const Wrap = styled.section`
  margin-bottom: 64px;
`

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  display: inline-block;
  position: relative;
  padding: 24px 32px;
  margin: 0 auto 24px;

  ${({ theme }: { theme: TTheme }) => theme.overlays.plusPattern}
`

export const Description = styled.p`
  margin: 0 auto 40px;
`

export const Images = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ImageWrap = styled.li`
  width: 24%;
  margin-bottom: 1vw;
`

export const StyledImg = styled(Img)`
  width: 100%;
`
