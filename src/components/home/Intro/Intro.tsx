import { Button } from '@components/Button'
import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import { Image, ImageWrap, Text, TextWrap, Wrap } from './Intro.styled'

type TProps = {
  text: string
  buttonText?: string
  image: FluidObject | null | undefined
}

const Intro = (props: TProps) => {
  const { image, text, buttonText } = props

  return (
    <div className="inner-container">
      <Wrap>
        <TextWrap>
          <Text dangerouslySetInnerHTML={{ __html: text }} />
          {buttonText && <Button link="/info" text={buttonText} />}
        </TextWrap>
        {image && (
          <ImageWrap>
            <Image fluid={image} />
          </ImageWrap>
        )}
      </Wrap>
    </div>
  )
}

export default Intro
