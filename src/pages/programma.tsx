import { EventCard, HeaderSmall, Layout } from '@components'
import { EventSectionWrap } from '@components/EventCard/EventCard.styled'
import { isBefore } from 'date-fns'
import { graphql } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'

export type TTag = {
  name: string
  enabled: boolean
}

const Programma = ({ data: { prismicProgramPage, allPrismicEvent } }: { data: Query }) => {
  const programPageData = idx(prismicProgramPage, _ => _.data)
  const events = idx(allPrismicEvent, _ => _.edges.map(event => event.node))

  const { title = 'Programma', subtitle = '' } = { ...programPageData }

  if (events) {
    events.sort((a, b) => (a.data.date > b.data.date ? 1 : a.data.date < b.data.date ? -1 : 0))
  }

  return (
    <Layout>
      <Helmet title="Programma" />
      <HeaderSmall
        title={title}
        subtitle={subtitle}
        picture={(programPageData && programPageData.header_image.url) || ''}
      />
      <div className="inner-container" style={{ margin: '32px auto' }}>
        <ol>
          <li>
            <EventSectionWrap>
              {events &&
                events.map(
                  ({ data: event }, i) =>
                    !isBefore(event.date, new Date()) && (
                      <li key={`${event.title}-${i}`}>
                        <EventCard event={event} index={i} />
                      </li>
                    )
                )}
            </EventSectionWrap>
          </li>

          <li>
            <h2 className="event-section-title">Afgelopen</h2>
            <EventSectionWrap>
              {events &&
                events.map(
                  ({ data: event }, i) =>
                    isBefore(event.date, new Date()) && (
                      <li key={`${event.title}-${i}`}>
                        <EventCard event={event} index={i} isOver />
                      </li>
                    )
                )}
            </EventSectionWrap>
          </li>
        </ol>
      </div>
    </Layout>
  )
}

export default Programma

export const query = graphql`
  query {
    prismicProgramPage {
      data {
        title
        subtitle
        header_image {
          url
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
            # sign_up_link {
            #   url
            # }
          }
        }
      }
    }
  }
`
