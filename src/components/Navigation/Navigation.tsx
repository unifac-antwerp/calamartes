import * as React from 'react'
import { InnerWrap, LogoWrap, NavLink, NavList, Wrap } from './Navigation.styled'

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
      <h1 className="hide">{siteTitle}</h1>
      <LogoWrap to="/">{siteTitle}</LogoWrap>
      <nav>
        <NavList>
          {navigationItems.map(item => (
            <li key={item.name}>
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </NavList>
      </nav>
    </InnerWrap>
  </Wrap>
)

export default Navigation
