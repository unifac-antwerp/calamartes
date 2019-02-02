import * as React from 'react'
import { InnerWrap, MadeBy, Wrap } from './Footer.styled'

const Footer = () => (
  <Wrap>
    <InnerWrap className="inner-container">
      <ol>
        <li>
          <address>
            address 30 <br /> belgium
          </address>
        </li>
        <li>0349823483</li>
        <li>email@mail.com</li>
      </ol>
      <MadeBy>
        Made with love by <a href="https://www.wouterlanduydt.be">Wouter Landuydt </a>
      </MadeBy>
      <ol>
        <li>linkedin</li>
        <li>ig</li>
        <li>facebook</li>
      </ol>
    </InnerWrap>
  </Wrap>
)

export default Footer
