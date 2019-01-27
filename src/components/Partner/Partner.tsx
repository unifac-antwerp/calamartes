import { cleanUrl } from '@utils'
import { FixedObject } from 'gatsby-image'
import * as React from 'react'
import { Description, Link, StyledImg, Title, Wrap } from './Partner.styled'

export enum PartnerStyle {
  detailMain = 'detailMain',
  detailFriend = 'detailFriend',
  default = 'default',
}

type TProps = {
  link?: string
  image?: FixedObject | undefined | null
  description?: string
  name: string
  styleName?: PartnerStyle
}

const Partner = (props: TProps) => {
  const { link, image, description = null, name, styleName = PartnerStyle.default } = props

  return (
    <Wrap onClick={styleName === PartnerStyle.detailFriend ? () => window.open(link) : undefined} styleName={styleName}>
      {!!image && <StyledImg fixed={image} alt={name} styleName={styleName} />}

      {styleName === PartnerStyle.detailMain && (
        <React.Fragment>
          <Title>{name}</Title>
          <Description>{description}</Description>
          {link && (
            <Link href={link} target="_blank">
              {cleanUrl(link)}
            </Link>
          )}
        </React.Fragment>
      )}
    </Wrap>
  )
}

export default Partner
