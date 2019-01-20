import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

const ornamentCSS = css`
  position: absolute;
  bottom: -32px;
  right: 0;
  height: 200px;
  width: 64vw;
  content: '';
  display: block;
  z-index: -10;
`

export const Wrap = styled.section`
  margin-bottom: 112px;
  position: relative;

  &:before {
    ${ornamentCSS}
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global02};
  }

  &:after {
    ${ornamentCSS}
    ${({ theme }: { theme: TTheme }) => theme.overlays.plusPattern}
  }
`

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global02};
  display: inline-block;
  position: relative;
  padding: 16px 32px;
  margin: 0 auto 32px;
  font-size: 40px;

  ${({ theme }: { theme: TTheme }) => theme.overlays.plusPatternFill}
`

export const Description = styled.div`
  text-align: center;
  margin: 0 auto 56px;
  width: 80%;
  max-width: 784px;
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
