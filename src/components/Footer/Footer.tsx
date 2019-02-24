import { TSocialItem } from '@components/Layout/Layout'
import * as React from 'react'
// @ts-ignore
import Twemoji from 'react-twemoji'
import { InnerWrap, List, MadeBy, Wrap } from './Footer.styled'

type TProps = {
  address: string
  phone: string
  email: string
  socials: TSocialItem[]
  noMargin: boolean
}

const Footer = ({ address, phone, email, socials, noMargin }: TProps) => (
  <Wrap noMargin={noMargin}>
    <div className="inner-container">
      <InnerWrap>
        <List>
          <ListItemLink link={`https://www.google.com/maps/search/${address.replace(/\s/g, ' ')}`}>
            <address>{address}</address>
          </ListItemLink>
          <ListItemLink link={`tel:${phone}`}>{phone}</ListItemLink>
          <ListItemLink link={`mailto:${email}`}>{email}</ListItemLink>
        </List>
        <List>
          {socials.map(social => (
            <ListItemLink link={social.link} key={social.name}>
              <React.Fragment>
                {React.cloneElement(social.icon, { width: 16, height: 16, style: { marginRight: 6 } })}
                {social.name}
              </React.Fragment>
            </ListItemLink>
          ))}
        </List>
      </InnerWrap>
      <MadeBy>
        Made with <Twemoji options={{ className: 'emoji' }}>💙</Twemoji> by{' '}
        <a href="https://www.wouterlanduydt.be" target="_blank" rel="noopener">
          Wouter Landuydt
        </a>
      </MadeBy>
    </div>
  </Wrap>
)

const ListItemLink = ({ link, children }: { link: string; children: JSX.Element | string }) => (
  <li>
    <a href={link} target="_blank" rel="noopener">
      {children}
    </a>
  </li>
)

export default Footer
