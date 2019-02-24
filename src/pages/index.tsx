import { Carousel, EventsTeaser, Header, Instagram, Intro, Layout, PartnerCTA, Partners, Pictures } from '@components'
import { sortHomepagePartners } from '@utils/partnerUtils'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import { Query } from '../graphql'

export type TPartnerHomepage = {
  image: string
  importance: number | null
  url: string
  name: string
}

const IndexPage = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allInstaNode, prismicGeneral, prismicHomepage, allPrismicPartner, allPrismicEvent }: Query) => {
      const homepagedata = idx(prismicHomepage, _ => _.data)
      const events = idx(allPrismicEvent, _ => _.edges.map(event => event.node.data)) || []
      const introImage = idx(homepagedata, _ => _.intro_image.localFile.childImageSharp.fluid)
      const carouselImages = idx(homepagedata, _ =>
        _.carousel_images.map(image => image.image.localFile.childImageSharp.fluid)
      )
      const pictures = [
        idx(homepagedata, _ => _.pictures_main_picture.localFile.childImageSharp.fluid),
        idx(homepagedata, _ => _.pictures_secondary_picture.localFile.childImageSharp.fluid),
      ]
      const homepagePartners = sortHomepagePartners(allPrismicPartner)

      const { location = '', start_date = '', end_date = '' } = { ...idx(prismicGeneral, _ => _.data) }

      const maxEvents = 10

      return (
        <Layout>
          <Header
            video={homepagedata && homepagedata.header_movie.url}
            image={(homepagedata && homepagedata.fallback_image.url) || ''}
            location={location}
            startDate={start_date}
            endDate={end_date}
          />

          {homepagedata && homepagedata.intro_text && (
            <Intro
              image={introImage}
              text={homepagedata.intro_text.html}
              buttonText={(homepagedata && homepagedata.intro_button_text) || ''}
            />
          )}

          {events && (
            // @ts-ignore
            <EventsTeaser events={events.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, maxEvents)} />
          )}

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
          <Partners partners={homepagePartners} />
        </Layout>
      )
    }}
  />
)

const pageQuery = graphql`
  query prismicHomepageQuery {
    prismicGeneral {
      data {
        location
        start_date
        end_date
      }
    }
    allPrismicEvent {
      edges {
        node {
          data {
            title
            organizer
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 240) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date
            short_description
            tags
            facebook_link {
              url
            }
            sign_up_link {
              url
            }
          }
        }
      }
    }
    allPrismicPartner {
      edges {
        node {
          id
          data {
            image {
              url
            }
            name
            link {
              url
            }
            importance
          }
        }
      }
    }
    prismicHomepage {
      data {
        header_movie {
          url
        }
        fallback_image {
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
