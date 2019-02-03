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
  facebookLink: string
  instagramLink: string
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

const Navigation = ({ title, subtitle, facebookLink, instagramLink }: TProps) => (
  <Location>
    {({ location }) => (
      <Wrap>
        <InnerWrap className="inner-container">
          <LogoWrap to="/">
            <Logo />
            <TitleWrap className={location.pathname !== '/' ? 'hide' : ''}>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
            </TitleWrap>
          </LogoWrap>
          <NavWrap>
            <nav>
              <MainNav>
                {navigationItems
                  .filter(item => !item.hidden)
                  .map(item => (
                    <li key={item.name}>
                      <NavLink to={item.link} className={location.pathname === `/${item.link}` ? 'active' : ''}>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                <li className="social">
                  <a href={instagramLink} target="_blank">
                    <InstagramIcon size="16" title="Instagram" />
                  </a>
                </li>
                <li className="social">
                  <a href={facebookLink} target="_blank">
                    <FacebookIcon size="16" title="Facebook" />
                  </a>
                </li>
              </MainNav>
            </nav>
          </NavWrap>
        </InnerWrap>
      </Wrap>
    )}
  </Location>
)

export default Navigation
