import styled from '@config/styles/styled-components'
import Img from 'gatsby-image'

export const Wrap = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 15;
  margin: -23px auto 16vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: row;
    margin: 96px auto 144px;
  }
`

export const TextWrap = styled.div`
  ${({ theme }) => theme.shadows.shadow01};
  background-color: ${({ theme }) => theme.colors.neutral01};
  padding: 24px;
  flex: 5;
  position: relative;
  top: 0;
  height: 100%;
  width: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 72vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: auto;
    top: -132px;
  }
`

export const Text = styled.div`
  margin-bottom: 24px;
`

export const ImageWrap = styled.div`
  flex: 4;
  max-height: 400px;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 72vw;
    align-self: flex-end;
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
