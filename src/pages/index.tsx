import { Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
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
        allInstaNode {
          edges {
            node {
              id
              localFile {
                childImageSharp {
                  fixed(width: 180, height: 180) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <p>{data.allPrismicHomepage.edges[0].node.data.test}</p>
        {data.allInstaNode.edges.map((post: any) => (
          <Img
            key={post.node.id}
            fixed={post.node.localFile.childImageSharp.fixed}
          />
        ))}
      </Layout>
    )}
  />
)

export default IndexPage
