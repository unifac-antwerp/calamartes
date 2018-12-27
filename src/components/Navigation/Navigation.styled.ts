import { Link } from 'gatsby'
import styled from 'styled-components'

export const Wrap = styled.div`
  background: ${props => props.theme.colors.neutral01};
  margin-bottom: 1.45rem;
`

export const InnerWrap = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.1rem 1.0875rem;
`

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
