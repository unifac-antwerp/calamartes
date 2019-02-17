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
    enabled: true,
    link: '/info',
    name: 'info',
  },
  {
    enabled: true,
    link: '/programma',
    name: 'programma',
  },
  {
    enabled: true,
    link: '/partners',
    name: 'partners',
  },
  {
    enabled: true,
    link: '/contact',
    name: 'contact',
  },
]

const Navigation = ({ title, subtitle, facebookLink, instagramLink }: TProps) => (
  <Location>
    {({ location }) => (
      <Wrap>
        <div className="inner-container">
          <InnerWrap>
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
                    .filter(item => item.enabled)
                    .map(item => (
                      <li key={item.name}>
                        <NavLink to={item.link} className={location.pathname === `/${item.link}` ? 'active' : ''}>
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  <ol className="social-wrap">
                    <li className="social">
                      <a href={instagramLink} target="_blank" rel="noopener">
                        <InstagramIcon size="16" title="Instagram" />
                      </a>
                    </li>
                    <li className="social">
                      <a href={facebookLink} target="_blank" rel="noopener">
                        <FacebookIcon size="16" title="Facebook" />
                      </a>
                    </li>
                  </ol>
                </MainNav>
              </nav>
            </NavWrap>
          </InnerWrap>
        </div>
      </Wrap>
    )}
  </Location>
)

export default Navigation
