import { TTheme } from '@config/styles/theme.type'
import Slider from 'react-slick'
import styled, { css } from 'styled-components'

const coreOrnamentCSS = css`
  position: absolute;
  content: '';
  display: block;
  z-index: -10;
  height: 100px;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    height: 180px;
  }
`

const topOrnamentCSS = css`
  ${coreOrnamentCSS}
  top: -24px;
  right: 0;
  width: 56vw;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.s}) {
    top: -64px;
  }
`

const bottomOrnamentCSS = css`
  ${coreOrnamentCSS}
  bottom: -24px;
  left: 0;
  width: 64vw;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.s}) {
    bottom: -64px;
  }
`

export const Wrap = styled.section`
  position: relative;
  margin-bottom: 20vw;
  
  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    margin-bottom: 168px;
  }

  &:before {
    ${topOrnamentCSS}
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  }

  &:after {
    ${topOrnamentCSS}
    ${({ theme }: { theme: TTheme }) => theme.overlays.plusPattern}
  }
`

export const InnerWrap = styled.section`
  position: relative;

  &:before {
    ${bottomOrnamentCSS}
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  }

  &:after {
    ${bottomOrnamentCSS}
    ${({ theme }: { theme: TTheme }) => theme.overlays.plusPattern}
  }
`

export const StyledSlider = styled(Slider)`
  position: relative;

  .slick-arrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
    z-index: 10;
    top: 50%;
    transform: translate(25%, -50%);
    width: 40px;
    height: 40px;
    ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};

    @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
      transform: translate(-50%, -50%);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .slick-next {
    transform: translate(-25%, -50%);
    right: 0;

    @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
      transform: translate(50%, -50%);
    }
  }

  .gatsby-image-wrapper {
    ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};
  }
`

export const ArrowWrap = styled.div`
  display: inherit;
  ${({ prev }: { prev?: boolean }) => prev && `transform: scaleX(-1)`}
`
