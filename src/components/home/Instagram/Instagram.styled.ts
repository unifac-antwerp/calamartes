import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

const ornamentCSS = css`
  position: absolute;
  bottom: -32px;
  right: 0;
  height: 60vw;
  width: 64vw;
  content: '';
  display: block;
  z-index: -10;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.s}) {
    height: 200px;
  }
`

export const Wrap = styled.section`
  margin-bottom: 180px;
  position: relative;

  &:before {
    ${ornamentCSS}
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
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
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  display: inline-block;
  position: relative;
  padding: 8px 24px;
  margin: 0 auto 32px;
  font-size: 8vw;
  
  ${({ theme }: { theme: TTheme }) => theme.overlays.plusPatternFill}
  
  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.xs}) {
    font-size: 36px;
  }
  
  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    font-size: 40px;
    padding: 16px 32px;
  }
`

export const Description = styled.div`
  text-align: center;
  margin: 0 auto 56px;
  width: 90%;
  max-width: 784px;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    width: 80%;
  }
`

export const Images = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ImageWrap = styled.li`
  width: 32%;
  margin-bottom: 1vw;
  ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};

  &:nth-of-type(n + 10) {
    display: none;
  }

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.s}) {
    width: 24%;

    &:nth-of-type(n + 9) {
      display: none;
    }
  }

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.l}) {
    width: 19%;
    display: block !important;
  }
`

export const StyledImg = styled(Img)`
  width: 100%;
`
