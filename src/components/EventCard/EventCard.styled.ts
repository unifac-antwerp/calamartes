import styled, { css } from '@config/styles/styled-components'
import Img from 'gatsby-image'
import { keyframes } from 'styled-components'

export const EventSectionWrap = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  justify-items: stretch;
  align-items: stretch;
  grid-auto-columns: 1fr;

  @media (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
`

export const Wrap = styled.article<{ index?: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  ${({ theme }) => theme.shadows.shadow02};
  height: 100%;
  ${({ index }) =>
    index !== undefined &&
    css`
      opacity: 0;
      animation: ${slideIn} 400ms ease-in-out;
      animation-fill-mode: forwards;
      animation-delay: ${index * 50}ms;
    `}

  .link {
    transition: transform 200ms ease-in-out;
    transform: translateY(0);

    @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
      transform: translateY(-64px);
    }
  }

  &:hover {
    .link {
      transform: translateY(0);
    }
  }
`

export const TagWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.global01};
  color: ${({ theme }) => theme.colors.neutral01};
  font-weight: ${({ theme }) => theme.typo.fontweights.medium};
  letter-spacing: 1px;
  padding: 0 8px;
  font-size: 12px;
  user-select: none;
  display: flex;
  align-items: center;
  height: 22px;
  margin-bottom: 8px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`

export const StyledImage = styled(Img)`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-color: ${({ theme }) => theme.colors.global01};
  }

  &:after {
    z-index: 2;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    content: '';
    display: block;
    ${({ theme }) => theme.overlays.plusPattern}
  }
`

export const LinkWrap = styled.ol`
  position: absolute;
  z-index: 3;
  display: flex;
  right: 8px;
  top: 8px;

  > li {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.global01};
  padding: 16px;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.global01};
  font-size: 24px;
`

export const Info = styled.span`
  font-family: ${({ theme }) => theme.typo.fonts.heading};
  font-weight: ${({ theme }) => theme.typo.fontweights.medium};
  font-size: 15px;
  margin-bottom: 8px;
`

export const Description = styled.span`
  font-size: 15px;
  line-height: 140%;
`
