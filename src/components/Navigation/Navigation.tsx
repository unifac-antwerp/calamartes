import Logo from '@assets/svg/Logo'
import { Location } from '@reach/router'
import * as React from 'react'
import {
  FacebookIcon,
  InnerWrap,
  InstagramIcon,
  LogoWrap,
  MainNav,
  NavLink,
  NavWrap,
  SubTitle,
  Title,
  TitleWrap,
  Wrap,
} from './Navigation.styled'

type TProps = {
  title: string
  subtitle: string
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

const Navigation = ({ title, subtitle }: TProps) => (
  <Wrap>
    <InnerWrap className="inner-container">
      <LogoWrap to="/">
        <Logo />
        <Location>
          {({ location }) => (
            <TitleWrap className={location.pathname !== '/' ? 'hide' : ''}>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
            </TitleWrap>
          )}
        </Location>
      </LogoWrap>
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
