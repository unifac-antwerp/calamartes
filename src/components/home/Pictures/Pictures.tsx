import * as React from 'react'
import { MainPictureWrap, SecondaryPictureWrap, StyledImg, Wrap } from './Pictures.styled'

type TProps = {
  mainPicture: string
  secondaryPicture: string
}

const Pictures = (props: TProps) => {
  const { mainPicture, secondaryPicture } = props

  return (
    <Wrap className="innerContainer">
      <SecondaryPictureWrap>
        <StyledImg src={secondaryPicture} alt="" />
      </SecondaryPictureWrap>
      <MainPictureWrap>
        <StyledImg src={mainPicture} alt="" />
      </MainPictureWrap>
    </Wrap>
  )
}

export default Pictures
