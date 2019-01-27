import * as React from 'react'
import { FacebookIcon, InnerWrap, InstagramIcon, LogoWrap, MainNav, NavLink, NavWrap, Wrap } from './Navigation.styled'

type TProps = {
  siteTitle?: string
}

const navigationItems = [
  {
    link: 'info',
    name: 'info',
  },
  {
    hidden: true,
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
    <InnerWrap className="inner-container">
      <h1 className="hide">{siteTitle}</h1>
      <LogoWrap to="/">LOGO</LogoWrap>
      <NavWrap>
        <nav>
          <MainNav>
            {navigationItems
              .filter(item => !item.hidden)
              .map(item => (
                <li key={item.name}>
                  <NavLink to={item.link}>{item.name}</NavLink>
                </li>
              ))}
            <li className="social">
              <a href="#">
                <InstagramIcon size="16" title="Instagram" />
              </a>
            </li>
            <li className="social">
              <a href="#">
                <FacebookIcon size="16" title="Facebook" />
              </a>
            </li>
          </MainNav>
        </nav>
      </NavWrap>
    </InnerWrap>
  </Wrap>
)

export default Navigation
