import { EventCard, HeaderSmall, Layout, TagFilter } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'

const Programma = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={({ allPrismicProgramPage, allPrismicEvent }: Query) => {
        const homepageData = idx(allPrismicProgramPage, _ => _.edges[0].node.data)
        const events = idx(allPrismicEvent, _ => _.edges.map(event => event.node.data))

        const { title = 'Programma', subtitle = '' } = { ...homepageData }

        const allTags =
          events &&
          Array.from(
            new Set(
              [].concat(
                // @ts-ignore
                ...events.map(event => event.tags.split(',').length > 0 && event.tags.split(',').map(tag => tag.trim()))
              )
            )
          ).sort()

        return (
          <Layout>
            <Helmet title="Programma" />
            <HeaderSmall
              title={title}
              subtitle={subtitle}
              picture={(homepageData && homepageData.header_image.url) || ''}
            />
            <div className="inner-container">
              <TagFilter tags={allTags as string[]} />
              <ol>
                {events &&
                  events.map((event, i) => (
                    <li key={`${event.title}-${i}`}>
                      <EventCard event={event} />
                    </li>
                  ))}
              </ol>
            </div>
          </Layout>
        )
      }}
    />
  )
}

export default Programma

const pageQuery = graphql`
  query {
    allPrismicProgramPage {
      edges {
        node {
          data {
            title
            subtitle
            header_image {
              url
            }
          }
        }
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
  }
`
