import { Button } from '@components/Button'
import * as React from 'react'
import { InnerWrap, Text, Title, Wrap } from './PartnerCTA.styled'

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
      <InnerWrap className="inner-container">
        <Title>{title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
        {buttonText && <Button link="/contact" text={buttonText} light={true} />}
      </InnerWrap>
    </Wrap>
  )
}

export default PartnerCTA
