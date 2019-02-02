import { Button } from '@components/Button'
import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import { ContentWrap, ImgWrap, StyledImg, Wrap } from './ContactContent.styled'

type TProps = {
  text: string
  image: FluidObject | null | undefined
  emailBtnText: string
  messengerBtnText: string
  email: string
  facebookLink: string
}

const ContactContent = ({ text, image, emailBtnText, messengerBtnText, email, facebookLink }: TProps) => {
  return (
    <div className="inner-container">
      <Wrap>
        <ContentWrap>
          <p>
            {text}
            <br />
            <br />
            <strong>{email}</strong>
          </p>
          <div className="btns">
            <Button text={emailBtnText} link={`mailto:${email}`} external={true} />
            <Button text={messengerBtnText} link={facebookLink} external={true} />
          </div>
        </ContentWrap>
        {!!image && (
          <ImgWrap>
            <StyledImg fluid={image} />
          </ImgWrap>
        )}
      </Wrap>
    </div>
  )
}

export default ContactContent
