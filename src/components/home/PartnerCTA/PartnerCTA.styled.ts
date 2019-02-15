import styled from '@config/styles/styled-components'

type TWrapProps = {
  bgImage: string
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
  width: 98%;
  max-width: 896px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 88%;
  }

  p,
  a {
    color: ${({ theme }) => theme.colors.neutral01};
    font-size: 17px;

    @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
      font-size: 19px;
    }
  }
`

export const SmallWrap = styled.div`
  text-align: center;
  margin: 80px auto;

  span {
    display: block;
    margin-bottom: 16px;
    font-family: ${({ theme }) => theme.typo.fonts.heading};
    font-weight: ${({ theme }) => theme.typo.fontweights.medium};
    font-size: 22px;
  }
`
