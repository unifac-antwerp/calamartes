import * as React from 'react'
import { InnerWrap, StyledLink, Wrap } from './Header.styled'

type TProps = {
  siteTitle?: string
}

const Header = ({ siteTitle = '' }: TProps) => (
  <Wrap>
    <InnerWrap>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </InnerWrap>
  </Wrap>
)

export default Header
