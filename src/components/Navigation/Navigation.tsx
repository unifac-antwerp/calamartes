import { Link } from 'gatsby'
import * as React from 'react'
import { InnerWrap, StyledLink, Wrap } from './Navigation.styled'

type TProps = {
  siteTitle?: string
}

const navigationItems = [
  {
    link: 'info',
    name: 'info',
  },
  {
    link: 'programma',
    name: 'programma',
  },
  {
    link: 'partners',
    name: 'partners',
  },
  {
    link: 'contact',
    name: 'contact',
  },
]

const Navigation = ({ siteTitle = '' }: TProps) => (
  <Wrap>
    <InnerWrap>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <nav>
        <ol>
          {navigationItems.map(item => (
            <li>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </InnerWrap>
  </Wrap>
)

export default Navigation
