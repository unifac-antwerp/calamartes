import cleanUrl from '@utils/cleanUrl'
import Img from 'gatsby-image'
import * as React from 'react'
import { Wrap } from './Partner.styled'

export enum PartnerStyle {
  detailMain = 'detailMain',
  detailFriend = 'detailFriend',
  default = 'default',
}

type TProps = {
  link?: string
  image: any
  description?: string
  name: string
  styleName?: PartnerStyle
}

const Partner = (props: TProps) => {
  const { link, image, description = null, name, styleName = PartnerStyle.default } = props

  return (
    <Wrap>
      <a href={styleName === PartnerStyle.detailMain ? undefined : link} target="_blank">
        <Img fixed={image} alt={name} />

        {styleName === PartnerStyle.detailMain && (
          <React.Fragment>
            <h3>{name}</h3>
            <p>{description}</p>
            {link && (
              <a href={link} target="_blank">
                {cleanUrl(link)}
              </a>
            )}
          </React.Fragment>
        )}
      </a>
    </Wrap>
  )
}

export default Partner
