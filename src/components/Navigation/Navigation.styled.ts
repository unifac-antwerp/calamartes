import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

export const headroomStyle = css`
  .headroom,
  .headroom-wrapper {
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    position: fixed;
  }
  .headroom--scrolled {
    background-color: ${({ theme }) => theme.colors.neutral02};
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;
`

export const LogoWrap = styled(Link)`
  text-decoration: none;
`

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const SecondaryNav = styled.ol`
  display: flex;
  margin-bottom: 8px;

  > * {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
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
  color: ${({ theme }) => theme.colors.neutral01};
  text-decoration: none;
  text-transform: capitalize;
`
