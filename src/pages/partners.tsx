import { HeaderSmall, Layout, Partner, PartnerStyle } from '@components'
import { getPartnersByType, PartnerType, sortPartners } from '@utils/partnerUtils'
import { graphql, StaticQuery } from 'gatsby'
import { get } from 'lodash'
import * as React from 'react'
import { PrismicPartner, Query } from '../graphql'

const Partners = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicPartner }: Query) => {
      const mainPartners = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.main))
      const friends = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.friend))

      const renderPartner = (partner: PrismicPartner | null | undefined, styleName: PartnerStyle) =>
        partner &&
        partner.data &&
        !!partner.data.name &&
        get(partner, 'data.image.localFile.childImageSharp.fixed') && (
          <li key={partner.id}>
            <Partner
              link={(partner.data.link && partner.data.link.url) || undefined}
              image={get(partner, 'data.image.localFile.childImageSharp.fixed')}
              description={partner.data.description || undefined}
              name={partner.data.name}
              styleName={styleName}
            />
          </li>
        )

      return (
        <Layout>
          <HeaderSmall
            title="Title"
            subtitle="Subtitle"
            picture="https://images.vrt.be/dako2017_1600s_j75/2018/03/15/7957bcc6-285e-11e8-abcc-02b7b76bf47f.jpg"
          />
          <h1>Partners</h1>
          <h2>Main Partners</h2>
          <ol>{mainPartners.map(partner => renderPartner(partner, PartnerStyle.detailMain))}</ol>
          <h2>Friends</h2>
          <ol>{friends.map(partner => renderPartner(partner, PartnerStyle.detailFriend))}</ol>
          <p>Want to be part of it?</p>
          <p>Email us</p>
        </Layout>
      )
    }}
  />
)

const pageQuery = graphql`
  query allPrismicPartnersQuery {
    allPrismicPartner {
      edges {
        node {
          id
          data {
            name
            image {
              localFile {
                childImageSharp {
                  fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            link {
              url
            }
            description
            type
            importance
          }
        }
      }
    }
  }
`

export default Partners
