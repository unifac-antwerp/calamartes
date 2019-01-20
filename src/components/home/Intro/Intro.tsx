import { Link } from 'gatsby'
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
    <Wrap className="innerContainer">
      <TextWrap>
        <Text dangerouslySetInnerHTML={{ __html: text }} />
        {buttonText && (
          <Link to="/info">
            <button>{buttonText}</button>
          </Link>
        )}
      </TextWrap>
      {image && (
        <ImageWrap>
          <Image fluid={image} />
        </ImageWrap>
      )}
    </Wrap>
  )
}

export default Intro
