import { EventCard, HeaderSmall, Layout, TagFilter } from '@components'
import { EventSectionWrap } from '@components/EventCard/EventCard.styled'
// import { getAllTags } from '@utils'
import { format, parse } from 'date-fns'
// @ts-ignore
import locale from 'date-fns/locale/nl'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import { groupBy } from 'lodash'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'

const Programma = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicProgramPage, allPrismicEvent }: Query) => {
      const homepageData = idx(allPrismicProgramPage, _ => _.edges[0].node.data)
      const events = idx(allPrismicEvent, _ => _.edges.map(event => event.node))

      const { title = 'Programma', subtitle = '' } = { ...homepageData }

      if (events) {
        // @ts-ignore
        events.sort((a, b) => new Date(a.data.date) - new Date(b.data.date))
      }

      const eventsData = idx(events, _ =>
        _.map(e => ({
          ...e.data,
          section: parse(format(e.data.date, 'YYYY-MM-DD', { locale })),
        }))
      )

      const eventsSorted = eventsData && groupBy(eventsData, 'section')

      // @ts-ignore
      const datesSorted = Object.keys(eventsSorted || {}).sort((a, b) => a - b)

      return (
        <Layout>
          <Helmet title="Programma" />
          <HeaderSmall
            title={title}
            subtitle={subtitle}
            picture={(homepageData && homepageData.header_image.url) || ''}
          />
          <div className="inner-container" style={{ marginTop: '32px' }}>
            {/* <TagFilter tags={events && (getAllTags(events) as string[])} /> */}
            <ol>
              {datesSorted.map((date, i) => (
                <li key={date}>
                  <h2 className="event-section-title">{format(date, 'dddd D MMMM', { locale })}</h2>
                  <EventSectionWrap>
                    {eventsSorted &&
                      Object.values(eventsSorted)[i].map((event, eventIndex) => (
                        <li key={`${event.title}-${i}`}>
                          <EventCard event={event} index={eventIndex} />
                        </li>
                      ))}
                  </EventSectionWrap>
                </li>
              ))}
            </ol>
          </div>
        </Layout>
      )
    }}
  />
)

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
