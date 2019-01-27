import { Partner, PartnerStyle } from '@components/Partner'
import idx from 'idx'
import * as React from 'react'
import { PrismicPartner } from 'src/graphql'
import { List, ListItem, Title, Wrap } from './Friends.styled'

type TProps = {
  friends: Array<PrismicPartner | null | undefined>
}

const Friends = ({ friends }: TProps) => {
  return (
    <Wrap className="inner-container">
      <Title>Friends</Title>
      <List>
        {friends.map(partner => {
          const partnerData = idx(partner, _ => _.data)

          return (
            !!partner &&
            partnerData && (
              <ListItem key={partner.id}>
                <Partner
                  link={partnerData.link.url}
                  image={idx(partnerData, _ => _.image.localFile.childImageSharp.fixed)}
                  description={partnerData.description}
                  name={partnerData.name}
                  styleName={PartnerStyle.detailFriend}
                />
              </ListItem>
            )
          )
        })}
      </List>
    </Wrap>
  )
}

export default Friends
