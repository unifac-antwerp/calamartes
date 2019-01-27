import * as React from 'react'
import { BorderBottom, InnerWrap, Subtitle, Wrap } from './HeaderSmall.styled'

type TProps = {
  title: string
  subtitle: string
  picture: string
}

const HeaderSmall = ({ title, subtitle, picture }: TProps) => (
  <React.Fragment>
    <Wrap bgImage={picture}>
      <InnerWrap className="inner-container">
        <h2>{title}</h2>
        <Subtitle>{subtitle}</Subtitle>
      </InnerWrap>
    </Wrap>
    <BorderBottom />
  </React.Fragment>
)

export default HeaderSmall
