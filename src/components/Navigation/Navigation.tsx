import * as React from 'react'
import {
  FacebookIcon,
  InnerWrap,
  InstagramIcon,
  LogoWrap,
  MainNav,
  NavLink,
  NavWrap,
  SecondaryNav,
  SecondaryNavWrap,
  Wrap,
} from './Navigation.styled'

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
    <SecondaryNavWrap>
      <SecondaryNav className="innerContainer">
        <li>
          <a href="#">
            <InstagramIcon size="16" title="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookIcon size="16" title="Facebook" />
          </a>
        </li>
      </SecondaryNav>
    </SecondaryNavWrap>
    <React.Fragment>
      <InnerWrap className="innerContainer">
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
            </MainNav>
          </nav>
        </NavWrap>
      </InnerWrap>
    </React.Fragment>
  </Wrap>
)

export default Navigation
