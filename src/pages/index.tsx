import { Carousel, Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { get } from 'lodash'
import * as React from 'react'
import { Query } from '../graphql'

const IndexPage = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allInstaNode, allPrismicHomepage }: Query) => (
      <Layout>
        <video
          src={get(allPrismicHomepage, 'edges[0].node.data.header_movie.url')}
          autoPlay={true}
          muted={true}
          style={{ width: '100%' }}
          loop={true}
        />
        <Carousel images={get(allPrismicHomepage, 'edges[0].node.data.carousel_images')} />
        {allInstaNode &&
          allInstaNode.edges &&
          allInstaNode.edges.map(
            post =>
              post &&
              post.node &&
              get(post, 'node.localFile.childImageSharp.fixed') && (
                <Img key={post.node.id} fixed={get(post, 'node.localFile.childImageSharp.fixed')} />
              )
          )}
      </Layout>
    )}
  />
)

const pageQuery = graphql`
  query allPrismicHomepageQuery {
    allPrismicHomepage {
      edges {
        node {
          data {
            header_movie {
              url
            }
            carousel_images {
              image {
                localFile {
                  childImageSharp {
                    fixed(height: 500) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
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
`

export default IndexPage
