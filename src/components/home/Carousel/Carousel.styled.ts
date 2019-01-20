import { TTheme } from '@config/styles/theme.type'
import Slider from 'react-slick'
import styled, { css } from 'styled-components'

const coreOrnamentCSS = css`
  position: absolute;
  content: '';
  display: block;
  z-index: -10;
`

const topOrnamentCSS = css`
  ${coreOrnamentCSS}
  top: -64px;
  right: 0;
  height: 180px;
  width: 56vw;
`

const bottomOrnamentCSS = css`
  ${coreOrnamentCSS}
  bottom: -64px;
  left: 0;
  height: 180px;
  width: 64vw;
`

export const Wrap = styled.section`
  position: relative;
  margin-bottom: 160px;

  &:before {
    ${topOrnamentCSS}
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global02};
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
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global02};
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
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};

    &:hover {
      cursor: pointer;
    }
  }

  .slick-next {
    transform: translate(50%, -50%);
    right: 0;
  }
`

export const ArrowWrap = styled.div`
  ${({ prev }: { prev?: boolean }) => prev && `transform: scaleX(-1)`}
`
