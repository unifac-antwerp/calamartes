import { ContactContent, HeaderSmall, Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'

const Contact = () => (
  <StaticQuery
    query={pageQuery}
    render={({ prismicContactPage, prismicGeneral }: Query) => {
      const prismicContactPageData = idx(prismicContactPage, _ => _.data)
      const prismicGeneralData = idx(prismicGeneral, _ => _.data)

      return (
        <Layout>
          <Helmet title="Contact" />
          <HeaderSmall
            title={(prismicContactPageData && prismicContactPageData.title) || ''}
            subtitle={(prismicContactPageData && prismicContactPageData.subtitle) || ''}
            picture={(prismicContactPageData && prismicContactPageData.header_image.url) || ''}
          />
          <ContactContent
            text={(prismicContactPageData && prismicContactPageData.text) || ''}
            email={(prismicGeneralData && prismicGeneralData.email) || ''}
            image={idx(prismicContactPageData, _ => _.image.localFile.childImageSharp.fluid)}
            emailBtnText={(prismicContactPageData && prismicContactPageData.email_button_text) || ''}
            messengerBtnText={(prismicContactPageData && prismicContactPageData.messenger_button_text) || ''}
            facebookLink={(prismicGeneralData && prismicGeneralData.facebook_link.url) || ''}
          />
        </Layout>
      )
    }}
  />
)

export default Contact

const pageQuery = graphql`
  query {
    prismicGeneral {
      data {
        email
        facebook_link {
          url
        }
      }
    }
    prismicContactPage {
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
`
