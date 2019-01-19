import { Carousel, Header, Instagram, Intro, Layout, Pictures } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import { get } from 'lodash'
import * as React from 'react'
import { Query } from '../graphql'

const IndexPage = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allInstaNode, allPrismicHomepage }: Query) => (
      <Layout>
        <Header video={get(allPrismicHomepage, 'edges[0].node.data.header_movie.url')} />

        <Intro
          image="https://ichef.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg"
          text="Woordje uitleg"
        />

        {/* next events */}

        <Carousel images={get(allPrismicHomepage, 'edges[0].node.data.carousel_images')} />

        <Pictures />
        <Instagram posts={allInstaNode && allInstaNode.edges} />
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
