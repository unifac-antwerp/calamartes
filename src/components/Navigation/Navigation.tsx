import Facebook from '@assets/svg/Facebook'
import Instagram from '@assets/svg/Instagram'
import * as React from 'react'
import Headroom from 'react-headroom'
import { LogoWrap, MainNav, NavLink, NavWrap, SecondaryNav, Wrap } from './Navigation.styled'

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
  <Headroom>
    <Wrap className="innerContainer">
      <h1 className="hide">{siteTitle}</h1>
      <LogoWrap to="/">{siteTitle}</LogoWrap>
      <NavWrap>
        <SecondaryNav>
          <li>
            <a href="#">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="#">
              <Facebook />
            </a>
          </li>
        </SecondaryNav>
        <nav>
          <MainNav>
            {navigationItems.map(item => (
              <li key={item.name}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
          </MainNav>
        </nav>
      </NavWrap>
    </Wrap>
  </Headroom>
)

export default Navigation
