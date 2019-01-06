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
    background-color: red;
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
  margin: 0 auto;
  max-width: 960px;
`

export const LogoWrap = styled(Link)`
  text-decoration: none;
`

export const NavList = styled.ol`
  display: flex;
`

export const NavLink = styled(Link)``
