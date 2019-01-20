import { Link } from 'gatsby'
import * as React from 'react'
import { InnerWrap, Text, Wrap } from './PartnerCTA.styled'

type TProps = {
  bgImage: string
  buttonText: string
  description: string
  title: string
}

const PartnerCTA = (props: TProps) => {
  const { bgImage, buttonText, description, title } = props

  return (
    <Wrap bgImage={bgImage}>
      <InnerWrap className="innerContainer">
        <h2>{title}</h2>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
        {buttonText && <Link to="/contact">{buttonText}</Link>}
      </InnerWrap>
    </Wrap>
  )
}

export default PartnerCTA
