import { Partner, PartnerStyle } from '@components/Partner'
import idx from 'idx'
import * as React from 'react'
import { PrismicPartner } from 'src/graphql'
import { List, ListItem, Title, Wrap } from './Friends.styled'

type TProps = {
  friends: Array<PrismicPartner | null | undefined>
  title: string
}

const Friends = ({ friends, title }: TProps) => {
  return (
    <div className="inner-container">
      <Wrap>
        <Title>{title}</Title>
        <List>
          {friends.map(partner => {
            const partnerData = idx(partner, _ => _.data)

            return (
              !!partner &&
              partnerData && (
                <ListItem key={partner.id}>
                  <Partner
                    link={partnerData.link.url}
                    image={partnerData.image.url}
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
    </div>
  )
}

export default Friends
