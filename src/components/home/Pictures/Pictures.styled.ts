import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16vw;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    margin-bottom: 112px;
    flex-direction: row;
  }
`

export const MainPictureWrap = styled.div`
  flex: 5;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  padding: 16px;
  margin-left: 10vw;
  margin-top: -16px;
  box-sizing: unset;
  position: relative;

  ${({ theme }: { theme: TTheme }) => theme.overlays.plusPatternFill};

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.s}) {
    padding: 24px;
    margin-top: -24px;
  }

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    margin-top: 4vw;
    padding: 32px;
    margin-left: -32px;
  }

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.l}) {
    padding: 40px;
    margin-left: -40px;
  }
`

export const SecondaryPictureWrap = styled.div`
  z-index: 10;
  flex: 4;
  width: 75vw;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    width: auto;
  }
`

export const StyledImg = styled(Img)`
  width: 100%;
  z-index: 10;
  position: relative;

  &.secondary {
    ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};
  }
`
