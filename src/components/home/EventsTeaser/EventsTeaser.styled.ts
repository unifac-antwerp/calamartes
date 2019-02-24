import styled, { css } from '@config/styles/styled-components'
import Slider from 'react-slick'

const topOrnamentCSS = css`
  position: absolute;
  content: '';
  display: block;
  z-index: -10;
  height: 180px;
  top: -34px;
  left: 0;
  width: 90vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 56vw;
    top: -64px;
  }
`

export const Wrap = styled.section`
  position: relative;
  margin-bottom: 20vw;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 168px;
  }

  &:before {
    ${topOrnamentCSS}
    background-color: ${({ theme }) => theme.colors.global01};
  }

  &:after {
    ${topOrnamentCSS}
    ${({ theme }) => theme.overlays.plusPattern}
  }
`

export const StyledSlider = styled(Slider)`
  position: relative;
  margin-top: 32px;

  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    &:not(:first-child) {
      padding-left: 8px;
    }
    /* max-height: 420px; */
  }

  .slick-arrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neutral01};
    z-index: 10;
    top: 50%;
    transform: translate(25%, -50%);
    width: 40px;
    height: 40px;
    ${({ theme }) => theme.shadows.shadow01};

    @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
      transform: translate(-50%, -50%);
    }

    &:hover {
      cursor: pointer;
    }

    &.slick-disabled {
      display: none;
    }
  }

  .slick-next {
    transform: translate(-25%, -50%);
    right: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
      transform: translate(50%, -50%);
    }
  }

  .gatsby-image-wrapper {
    ${({ theme }) => theme.shadows.shadow01};
  }
`

export const ArrowWrap = styled.div`
  display: inherit;
  ${({ prev }: { prev?: boolean }) => prev && `transform: scaleX(-1)`}
`
