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
  background-position: 50% 0;
  background-size: cover;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: ${({ theme }: TWrapProps) => theme.colors.global02};
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

export const Text = styled.p`
  margin: 24px 0;
`
