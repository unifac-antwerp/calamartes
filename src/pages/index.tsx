import { Carousel, Header, Instagram, Intro, Layout, Pictures } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import { Query } from '../graphql'

const IndexPage = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allInstaNode, allPrismicHomepage }: Query) => {
      const homepagedata = idx(allPrismicHomepage, _ => _.edges[0].node.data)

      return (
        <Layout>
          <Header video={homepagedata && homepagedata.header_movie.url} />

          <Intro
            image="https://ichef.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg"
            text="Woordje uitleg"
          />

          {/* next events */}

          <Carousel images={homepagedata && homepagedata.carousel_images} />

          <Pictures
            mainPicture="https://ichef.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg"
            secondaryPicture="https://ichef.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg"
          />
          <Instagram posts={allInstaNode && allInstaNode.edges} />
        </Layout>
      )
    }}
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
