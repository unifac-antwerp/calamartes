import { TTheme } from '@config/styles/theme.type'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { Facebook } from 'styled-icons/fa-brands/Facebook'
import { Instagram } from 'styled-icons/fa-brands/Instagram'

export const Wrap = styled.div`
  position: absolute;
  width: 100%;
`

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding-bottom: 8px;
`

export const LogoWrap = styled(Link)`
  text-decoration: none;
  color: white;
`

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const SecondaryNavWrap = styled.div`
  padding: 8px 0;
`

export const SecondaryNav = styled.ol`
  display: flex;
  justify-content: flex-end;

  > * {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
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
  }
`

export const NavLink = styled(Link)`
  color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
  font-family: ${({ theme }: { theme: TTheme }) => theme.typo.fonts.heading};
  font-weight: ${({ theme }: { theme: TTheme }) => theme.typo.fontweights.light};
  text-decoration: none;
  text-transform: capitalize;
`
