import Img, { FixedObject } from 'gatsby-image'
import * as React from 'react'
import Slider from 'react-slick'

type TProps = {
  images: Array<FixedObject | null | undefined>
}

const CarouselComponent = (props: TProps) => {
  const { images } = props

  return images ? (
    <section className="innerContainer">
      <Slider>{images.map((image, index) => image && <Img key={index} fixed={image} alt="" />)}</Slider>
    </section>
  ) : null
}

export default CarouselComponent
