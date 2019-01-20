import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import { MainPictureWrap, SecondaryPictureWrap, StyledImg, Wrap } from './Pictures.styled'

type TProps = {
  mainPicture: FluidObject | null | undefined
  secondaryPicture: FluidObject | null | undefined
}

const Pictures = (props: TProps) => {
  const { mainPicture, secondaryPicture } = props

  return (
    <Wrap className="innerContainer">
      {secondaryPicture && (
        <SecondaryPictureWrap>
          <StyledImg fluid={secondaryPicture} />
        </SecondaryPictureWrap>
      )}
      {mainPicture && (
        <MainPictureWrap>
          <StyledImg fluid={mainPicture} />
        </MainPictureWrap>
      )}
    </Wrap>
  )
}

export default Pictures
