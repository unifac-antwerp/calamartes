import { get } from 'lodash'
import Carousel from 'nuka-carousel'
import * as React from 'react'
import { StyledImg } from './Carousel.styled'

type TProps = {
  images: Array<{ image: any }> | undefined
}

const CarouselComponent = (props: TProps) => {
  const { images } = props

  return images && images.length > 0 ? (
    <div className="innerContainer">
      <Carousel
        slideIndex={0}
        length={6}
        wrapAround={false}
        underlineHeader={false}
        slidesToShow={1}
        cellAlign="left"
        transitionMode="scroll"
        heightMode="max"
        withoutControls={false}
      >
        {images.map(({ image }, index) => {
          const imageFixed = get(image, 'localFile.childImageSharp.fixed')

          return imageFixed && <StyledImg key={index} fixed={imageFixed} alt="" />
        })}
      </Carousel>
    </div>
  ) : null
}

export default CarouselComponent
