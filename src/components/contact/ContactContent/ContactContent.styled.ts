import { TTheme } from '@config/styles/theme.type'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const Wrap = styled.section`
  margin-top: 40px;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    display: flex;
    justify-content: space-between;
  }
`

export const ContentWrap = styled.div`
  flex: 4;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    padding-right: 32px;
    width: auto;
  }

  p {
    max-width: 600px;
  }

  .btns {
    margin-top: 40px;

    > * {
      margin-bottom: 16px;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`

export const ImgWrap = styled.div`
  flex: 3;
  margin-top: 32px;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.m}) {
    margin-top: 0px;
    width: auto;
  }
`

export const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`
