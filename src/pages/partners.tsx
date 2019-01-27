import { Friends, HeaderSmall, Layout, MainPartners, PartnerStyle } from '@components'
import { getPartnersByType, PartnerType, sortPartners } from '@utils/partnerUtils'
import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { Query } from '../graphql'

const Partners = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicPartner }: Query) => {
      const mainPartners = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.main))
      const friends = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.friend))

      return (
        <Layout>
          <HeaderSmall
            title="Title"
            subtitle="Subtitle"
            picture="https://images.vrt.be/dako2017_1600s_j75/2018/03/15/7957bcc6-285e-11e8-abcc-02b7b76bf47f.jpg"
          />
          <MainPartners mainPartners={mainPartners} />
          <Friends friends={friends} />

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
                  fixed(height: 180) {
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
