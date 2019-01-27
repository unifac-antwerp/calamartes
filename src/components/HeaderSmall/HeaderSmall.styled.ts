/* tslint:disable:no-var-requires */
import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

type TWrapProps = {
  bgImage: string
}

export const Wrap = styled.div`
  position: relative;
  background-image: ${({ bgImage }: TWrapProps) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.85;
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: url(${require('@assets/images/plus_pattern.png')});
    background-size: 140px;
  }
`

export const BorderBottom = styled.div`
  height: 8px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.global01};
  position: relative;
  ${({ theme }: { theme: TTheme }) => theme.overlays.plusPatternFill};
`

export const InnerWrap = styled.div`
  position: relative;
  z-index: 2;
  padding: 104px 0 48px;
`

export const Subtitle = styled.span`
  color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  font-size: 20px;
  margin-top: 4px;
  display: block;
`
