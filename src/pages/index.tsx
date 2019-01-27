import { Carousel, Header, Instagram, Intro, Layout, PartnerCTA, Pictures } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import { Query } from '../graphql'

const IndexPage = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allInstaNode, allPrismicHomepage }: Query) => {
      const homepagedata = idx(allPrismicHomepage, _ => _.edges[0].node.data)
      const introImage = idx(homepagedata, _ => _.intro_image.localFile.childImageSharp.fluid)
      const carouselImages = idx(homepagedata, _ =>
        _.carousel_images.map(image => image.image.localFile.childImageSharp.fluid)
      )
      const pictures = [
        idx(homepagedata, _ => _.pictures_main_picture.localFile.childImageSharp.fluid),
        idx(homepagedata, _ => _.pictures_secondary_picture.localFile.childImageSharp.fluid),
      ]

      return (
        <Layout>
          <Header video={homepagedata && homepagedata.header_movie.url} />

          {homepagedata && homepagedata.intro_text && (
            <Intro
              image={introImage}
              text={homepagedata.intro_text.html}
              buttonText={(homepagedata && homepagedata.intro_button_text) || ''}
            />
          )}

          {/* next events */}

          {!!carouselImages && <Carousel images={carouselImages} />}

          {!!pictures && <Pictures mainPicture={pictures[0]} secondaryPicture={pictures[1]} />}

          <Instagram
            posts={allInstaNode && allInstaNode.edges}
            title={(homepagedata && homepagedata.social_title) || ''}
            description={(homepagedata && homepagedata.social_description.html) || ''}
          />

          {homepagedata && homepagedata.partnercta_title && homepagedata.partnercta_description && (
            <PartnerCTA
              bgImage={(homepagedata && homepagedata.partnercta_bgimage.url) || ''}
              buttonText={(homepagedata && homepagedata.partnercta_button_text) || ''}
              description={homepagedata.partnercta_description.html}
              title={homepagedata.partnercta_title}
            />
          )}
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
            intro_text {
              html
            }
            intro_button_text
            intro_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            carousel_images {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            pictures_main_picture {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            pictures_secondary_picture {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            partnercta_bgimage {
              url
            }
            partnercta_button_text
            partnercta_title
            partnercta_description {
              html
            }
            social_title
            social_description {
              html
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
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
