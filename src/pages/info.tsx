import { HeaderSmall, Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'

const Info = () => (
  <StaticQuery
    query={pageQuery}
    render={({ prismicInfoPage }: Query) => {
      const prismicInfoPageData = idx(prismicInfoPage, _ => _.data)

      return (
        <Layout>
          <Helmet title="Info" />
          <HeaderSmall
            title={(prismicInfoPageData && prismicInfoPageData.title) || ''}
            subtitle={(prismicInfoPageData && prismicInfoPageData.subtitle) || ''}
            picture={(prismicInfoPageData && prismicInfoPageData.header_image.url) || ''}
          />
          <div className="inner-container">
            <main
              className="richtext"
              dangerouslySetInnerHTML={{ __html: (prismicInfoPageData && prismicInfoPageData.info.html) || '' }}
            />
          </div>
        </Layout>
      )
    }}
  />
)

export default Info

const pageQuery = graphql`
  query {
    prismicInfoPage {
      data {
        title
        subtitle
        header_image {
          url
        }
        info {
          html
        }
      }
    }
  }
`
