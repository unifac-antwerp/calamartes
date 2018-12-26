import { Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query allPrismicHomepageQuery {
        allPrismicHomepage {
          edges {
            node {
              data {
                test
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <span>{data.allPrismicHomepage.edges[0].node.data.test}</span>
      </Layout>
    )}
  />
)

export default IndexPage
