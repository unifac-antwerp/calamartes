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
    <div className="inner-container">
      <Wrap>
        {secondaryPicture && (
          <SecondaryPictureWrap>
            <StyledImg fluid={secondaryPicture} className="secondary" />
          </SecondaryPictureWrap>
        )}
        {mainPicture && (
          <MainPictureWrap>
            <StyledImg fluid={mainPicture} />
          </MainPictureWrap>
        )}
      </Wrap>
    </div>
  )
}

export default Pictures
