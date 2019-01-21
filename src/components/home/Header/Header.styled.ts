import { TTheme } from '@config/styles/theme.type'
import { transparentize } from 'polished'
import styled from 'styled-components'

export const Wrap = styled.header`
  height: 88vh;
  min-height: 760px;
  background-color: ${({ theme }) => theme.colors.neutral02};
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -10;
  color: ${({ theme }) => theme.colors.neutral01};
  ${({ theme }: { theme: TTheme }) => theme.overlays.plusPatternFill};
`

export const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Logo = styled.img`
  margin-top: -72px;
  user-select: none;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 80px;
`

export const Date = styled.span`
  ${({ theme }: { theme: TTheme }) => theme.typo.textstyle.heading02};
  font-size: 44px;
`

export const Location = styled.span`
  ${({ theme }: { theme: TTheme }) => theme.typo.textstyle.heading02};
  font-weight: ${({ theme }: { theme: TTheme }) => theme.typo.fontweights.medium};
  font-size: 32px;
`

export const VideoOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: ${({ theme }: { theme: TTheme }) => `
    linear-gradient(
      0deg,
      ${transparentize(0.1, theme.colors.global01)} 0%,
      ${transparentize(0.3, theme.colors.global01)} 40%,
      ${transparentize(0.2, theme.colors.global01)} 50%,
      ${transparentize(0.1, theme.colors.neutral02)} 100%
    )`};
`

export const Video = styled.video`
  position: absolute;
  opacity: 0.85;

  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
