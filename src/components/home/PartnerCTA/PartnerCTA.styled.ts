import { TTheme } from '@config/styles/theme.type'
import styled from 'styled-components'

type TWrapProps = {
  bgImage: string
  theme: TTheme
}

export const Wrap = styled.section`
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
    opacity: 0.75;
    background-color: ${({ theme }: TWrapProps) => theme.colors.global01};
  }

  ${({ theme }: TWrapProps) => theme.overlays.plusPatternFill};
`

export const InnerWrap = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0;
`

export const Title = styled.h2`
  text-align: center;
`

export const Text = styled.div`
  margin: 24px 0 40px;
  text-align: center;
  width: 88%;
  max-width: 896px;

  p,
  a {
    color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
    font-size: 19px;
  }
`
