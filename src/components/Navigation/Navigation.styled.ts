import { Link } from 'gatsby'
import styled from 'styled-components'

export const Wrap = styled.div``

export const InnerWrap = styled.div`
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
