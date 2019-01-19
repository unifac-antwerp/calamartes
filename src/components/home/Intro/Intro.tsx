import { Link } from 'gatsby'
import * as React from 'react'
import { Image, ImageWrap, Text, TextWrap, Wrap } from './Intro.styled'

type TProps = {
  text: string
  image: string
}

const Intro = (props: TProps) => {
  const { image, text } = props

  return (
    <Wrap className="innerContainer">
      <TextWrap>
        <Text>{text}</Text>
        <Link to="/info">
          <button>Learn More</button>
        </Link>
      </TextWrap>
      <ImageWrap>
        <Image src={image} alt="" />
      </ImageWrap>
    </Wrap>
  )
}

export default Intro
