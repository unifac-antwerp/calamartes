import { Button } from '@components/Button'
import * as React from 'react'
import { InnerWrap, SmallWrap, Text, Title, Wrap } from './PartnerCTA.styled'

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

export const PartnerCTASmall = ({ title, buttonText, email }: { title: string; buttonText: string; email: string }) => (
  <div className="inner-container">
    <SmallWrap>
      <span>{title}</span>
      <Button link={`mailto:${email}`} text={buttonText} external={true} />
    </SmallWrap>
  </div>
)

export default PartnerCTA
