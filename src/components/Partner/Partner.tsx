import cleanUrl from '@utils/cleanUrl'
import * as React from 'react'
import { Description, ExtraContent, Link, StyledImg, Title, Wrap } from './Partner.styled'

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
    <Wrap href={styleName === PartnerStyle.detailMain ? undefined : link} target="_blank">
      <StyledImg fixed={image} alt={name} />

      {styleName === PartnerStyle.detailMain && (
        <ExtraContent>
          <Title>{name}</Title>
          <Description>{description}</Description>
          {link && (
            <Link href={link} target="_blank">
              {cleanUrl(link)}
            </Link>
          )}
        </ExtraContent>
      )}
    </Wrap>
  )
}

export default Partner
