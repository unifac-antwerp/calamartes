import { cleanUrl } from '@utils'
import * as React from 'react'
import { Description, ImageWrap, Link, StyledImg, Title, Wrap } from './Partner.styled'

export enum PartnerStyle {
  detailMain = 'detailMain',
  detailFriend = 'detailFriend',
  default = 'default',
}

type TProps = {
  link?: string
  image: string
  description?: string
  name: string
  styleName?: PartnerStyle
}

const Partner = (props: TProps) => {
  const { link, image, description = null, name, styleName = PartnerStyle.default } = props

  const isMainPartner = styleName === PartnerStyle.detailMain

  return (
    <Wrap
      onClick={!isMainPartner ? () => window.open(link) : undefined}
      styleName={styleName}
      as={isMainPartner ? 'article' : 'div'}
    >
      {!!image && (
        <ImageWrap styleName={styleName}>
          <StyledImg src={image} alt={name} styleName={styleName} title={name} />
        </ImageWrap>
      )}

      {isMainPartner && (
        <React.Fragment>
          <Title>{name}</Title>
          <Description>{description}</Description>
          {link && (
            <Link href={link} target="_blank" rel="noopener">
              {cleanUrl(link)}
            </Link>
          )}
        </React.Fragment>
      )}
    </Wrap>
  )
}

export default Partner
