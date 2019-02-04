import { TTheme } from '@config/styles/theme.type'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { Facebook } from 'styled-icons/fa-brands/Facebook'
import { Instagram } from 'styled-icons/fa-brands/Instagram'

export const Wrap = styled.div`
  position: absolute;
  width: 100%;
  z-index: 9999;
`

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 24px 0;
`

export const LogoWrap = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  display: flex;
  align-items: center;
`

export const TitleWrap = styled.div`
  display: none;

  @media (min-width: ${({ theme }: { theme: TTheme }) => theme.breakpoints.s}) {
    display: block;
    margin-left: 16px;
  }
`

export const Title = styled.h1`
  font-size: 15px;
  line-height: 16px;
  font-weight: ${({ theme }: { theme: TTheme }) => theme.typo.fontweights.medium};
`

export const SubTitle = styled.span`
  display: block;
  font-size: 12px;
  line-height: 16px;
  font-family: ${({ theme }: { theme: TTheme }) => theme.typo.fonts.heading};
`

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const icoStyle = css`
  color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
`

export const FacebookIcon = styled(Facebook)`
  ${icoStyle}
`

export const InstagramIcon = styled(Instagram)`
  ${icoStyle}
`

export const MainNav = styled.ol`
  display: flex;

  > * {
    &:not(:last-child) {
      margin-right: 16px;
    }

    &.social:not(:last-child) {
      margin-right: 8px;
    }
  }
`

const underlineCSS = css`
  content: '';
  display: block;
  position: absolute;
  height: 2px;
  bottom: -2px;
  background-color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  width: 100%;
`

export const NavLink = styled(Link)`
  color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  font-family: ${({ theme }: { theme: TTheme }) => theme.typo.fonts.heading};
  font-weight: ${({ theme }: { theme: TTheme }) => theme.typo.fontweights.light};
  text-decoration: none;
  text-transform: capitalize;
  position: relative;

  &:after {
    ${underlineCSS}
    transform: scale(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover {
    &:after {
      transform: scale(0.6);
    }
  }

  &.active {
    &:after {
      transform: scale(1);
    }
  }
`
