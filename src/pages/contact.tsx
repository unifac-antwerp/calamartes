import { ContactContent, HeaderSmall, Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import { Query } from 'src/graphql'

const Contact = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicContactPage, allPrismicGeneral }: Query) => {
      const allPrismicContactPageData = idx(allPrismicContactPage, _ => _.edges[0].node.data)
      const allPrismicGeneralData = idx(allPrismicGeneral, _ => _.edges[0].node.data)

      return (
        <Layout>
          <HeaderSmall
            title={(allPrismicContactPageData && allPrismicContactPageData.title) || ''}
            subtitle={(allPrismicContactPageData && allPrismicContactPageData.subtitle) || ''}
            picture={(allPrismicContactPageData && allPrismicContactPageData.header_image.url) || ''}
          />
          <ContactContent
            text={(allPrismicContactPageData && allPrismicContactPageData.text) || ''}
            email={(allPrismicGeneralData && allPrismicGeneralData.email) || ''}
            image={idx(allPrismicContactPageData, _ => _.image.localFile.childImageSharp.fluid)}
            emailBtnText={(allPrismicContactPageData && allPrismicContactPageData.email_button_text) || ''}
            messengerBtnText={(allPrismicContactPageData && allPrismicContactPageData.messenger_button_text) || ''}
            facebookLink={(allPrismicGeneralData && allPrismicGeneralData.facebook_link.url) || ''}
          />
        </Layout>
      )
    }}
  />
)

export default Contact

const pageQuery = graphql`
  query {
    allPrismicGeneral {
      edges {
        node {
          data {
            email
            facebook_link {
              url
            }
          }
        }
      }
    }
    allPrismicContactPage {
      edges {
        node {
          data {
            title
            subtitle
            header_image {
              url
            }
            text
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            email_button_text
            messenger_button_text
          }
        }
      }
    }
  }
`
