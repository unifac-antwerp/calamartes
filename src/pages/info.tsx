import { HeaderSmall, Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import { Query } from 'src/graphql'

const Info = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicInfoPage }: Query) => {
      const allPrismicInfoPageData = idx(allPrismicInfoPage, _ => _.edges[0].node.data)

      return (
        <Layout>
          <HeaderSmall
            title={(allPrismicInfoPageData && allPrismicInfoPageData.title) || ''}
            subtitle={(allPrismicInfoPageData && allPrismicInfoPageData.subtitle) || ''}
            picture={(allPrismicInfoPageData && allPrismicInfoPageData.header_image.url) || ''}
          />

          <div
            className="inner-container"
            dangerouslySetInnerHTML={{ __html: (allPrismicInfoPageData && allPrismicInfoPageData.info.html) || '' }}
          />
        </Layout>
      )
    }}
  />
)

export default Info

const pageQuery = graphql`
  query {
    allPrismicInfoPage {
      edges {
        node {
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
    }
  }
`
