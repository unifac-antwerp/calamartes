import Img from 'gatsby-image'
import { get } from 'lodash'
import * as React from 'react'
import Slider from 'react-slick'

type TProps = {
  images: Array<{ image: any }> | undefined
}

const CarouselComponent = (props: TProps) => {
  const { images } = props

  return images && images.length > 0 ? (
    <div className="innerContainer">
      <Slider>
        {images.map(({ image }, index) => {
          const imageFixed = get(image, 'localFile.childImageSharp.fixed')

          return imageFixed && <Img key={index} fixed={imageFixed} alt="" />
        })}
      </Slider>
    </div>
  ) : null
}

export default CarouselComponent
