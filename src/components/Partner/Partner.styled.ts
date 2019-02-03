import { TTheme } from '@config/styles/theme.type'
import styled, { css } from 'styled-components'
import { PartnerStyle } from './Partner'

const mainPartnerStyle = css`
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  padding: 16px;
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const friendStyle = css`
  transform: scale(0.8);
`

export const Wrap = styled.article`
  ${({ styleName }: { styleName: PartnerStyle }) =>
    styleName === PartnerStyle.detailFriend ? friendStyle : mainPartnerStyle}

  &:hover {
    ${({ onClick }) => !!onClick && 'cursor: pointer;'};
  }
`

export const ImageWrap = styled.div`
  ${({ styleName }: { styleName: PartnerStyle }) =>
    styleName === PartnerStyle.detailMain ? 'height: 180px;' : 'height: 120px;'}

  width: auto;
  margin: 0 auto;
  ${({ styleName }: { styleName: PartnerStyle }) =>
    styleName === PartnerStyle.detailMain ? 'margin: 24px auto;' : 'margin: 8px;'}
`

export const StyledImg = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  ${({ styleName }: { styleName: PartnerStyle }) =>
    styleName === PartnerStyle.detailMain
      ? `
      min-width: 180px;
      min-height: 180px;`
      : `
      min-width: 120px;
      min-height: 120px;
    `}
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
