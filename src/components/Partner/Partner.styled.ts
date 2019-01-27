import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const Wrap = styled.article`
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  padding: 16px;
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    ${({ onClick }) => !!onClick && 'cursor: pointer;'};
  }
`

export const StyledImg = styled(Img)`
  /* height: 100%;
  position: relative; */
`

export const ImageWrap = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto;
`

export const Title = styled.h3`
  margin: 24px 0;
`

export const Description = styled.p`
  flex: 1 0 auto;
`

export const Link = styled.a`
  margin-top: 16px;
  font-family: ${({ theme }: { theme: TTheme }) => theme.typo.fonts.heading};
  font-weight: ${({ theme }: { theme: TTheme }) => theme.typo.fontweights.semiBold};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
