import { Friends, HeaderSmall, Layout, MainPartners, PartnerCTASmall } from '@components'
import { getPartnersByType, PartnerType, sortPartners } from '@utils/partnerUtils'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from '../graphql'

const Partners = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicPartner, allPrismicPartnersPage, allPrismicGeneral }: Query) => {
      const partnerPageData = idx(allPrismicPartnersPage, _ => _.edges[0].node.data)
      const generalData = idx(allPrismicGeneral, _ => _.edges[0].node.data)
      const mainPartners = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.main))
      const friends = sortPartners(getPartnersByType(allPrismicPartner, PartnerType.friend))

      const {
        partners_title = '',
        partners_subtitle = '',
        partners_cta_title = '',
        cta_button_text = '',
        friends_title = 'Friends',
        email = '',
        main_partners_title = 'Main Partners',
      } = { ...partnerPageData, ...generalData }

      return (
        <Layout>
          <Helmet title="Partners" />
          <HeaderSmall
            title={partners_title}
            subtitle={partners_subtitle}
            picture={(partnerPageData && partnerPageData.partners_header_image.url) || ''}
          />
          <MainPartners mainPartners={mainPartners} title={main_partners_title} />
          <Friends friends={friends} title={friends_title} />
          <PartnerCTASmall buttonText={cta_button_text} email={email} title={partners_cta_title} />
        </Layout>
      )
    }}
  />
)

const pageQuery = graphql`
  query allPrismicPartnersQuery {
    allPrismicGeneral {
      edges {
        node {
          data {
            email
          }
        }
      }
    }
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
            cta_button_text
            main_partners_title
            friends_title
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
              url
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
