import { Link } from 'gatsby'
import * as React from 'react'
import { InnerWrap, Text, Wrap } from './PartnerCTA.styled'

type TProps = {
  bgImage: string
  CTAText: string
  description: string
  title: string
}

const PartnerCTA = (props: TProps) => {
  const { bgImage, CTAText, description, title } = props

  return (
    <Wrap bgImage={bgImage}>
      <InnerWrap className="innerContainer">
        <h2>{title}</h2>
        <Text>{description}</Text>
        {CTAText && <Link to="/contact">{CTAText}</Link>}
      </InnerWrap>
    </Wrap>
  )
}

export default PartnerCTA
