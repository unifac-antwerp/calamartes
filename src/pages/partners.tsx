import { Friends, HeaderSmall, Layout, MainPartners, PartnerStyle } from '@components'
import { getPartnersByType, PartnerType, sortPartners } from '@utils/partnerUtils'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import { Query } from '../graphql'

const Partners = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicPartner, allPrismicPartnersPage }: Query) => {
      const allPrismicPartnersPageData = idx(allPrismicPartnersPage, _ => _.edges[0].node.data)
      const mainPartners = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.main))
      const friends = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.friend))

      return (
        <Layout>
          <HeaderSmall
            title={(allPrismicPartnersPageData && allPrismicPartnersPageData.partners_title) || ''}
            subtitle={(allPrismicPartnersPageData && allPrismicPartnersPageData.partners_subtitle) || ''}
            picture={(allPrismicPartnersPageData && allPrismicPartnersPageData.partners_header_image.url) || ''}
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
    allPrismicPartnersPage {
      edges {
        node {
          data {
            partners_header_image {
              url
            }
            partners_title
            partners_subtitle
            partners_cta_title
            partners_cta_link {
              html
            }
          }
        }
      }
    }
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
