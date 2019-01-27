import { Partner, PartnerStyle } from '@components/Partner'
import idx from 'idx'
import * as React from 'react'
import { PrismicPartner } from 'src/graphql'
import { List, ListItem, Title, Wrap } from './MainPartners.styled'

type TProps = {
  mainPartners: Array<PrismicPartner | null | undefined>
}

const MainPartners = ({ mainPartners }: TProps) => {
  return (
    <Wrap>
      <div className="inner-container">
        <Title>Main Partners</Title>
        <List>
          {mainPartners.map(partner => {
            const partnerData = idx(partner, _ => _.data)

            return (
              !!partner &&
              partnerData && (
                <ListItem key={partner.id}>
                  <article>
                    <Partner
                      link={partnerData.link.url}
                      image={idx(partnerData, _ => _.image.localFile.childImageSharp.fluid)}
                      description={partnerData.description}
                      name={partnerData.name}
                      styleName={PartnerStyle.detailMain}
                    />
                  </article>
                </ListItem>
              )
            )
          })}
        </List>
      </div>
    </Wrap>
  )
}

export default MainPartners
