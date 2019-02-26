import { EventCard, HeaderSmall, Layout, TagFilter } from '@components'
import { EventSectionWrap } from '@components/EventCard/EventCard.styled'
import { getAllTags } from '@utils'
import { format, parse } from 'date-fns'
// @ts-ignore
import locale from 'date-fns/locale/nl'
import { graphql } from 'gatsby'
import idx from 'idx'
import { groupBy } from 'lodash'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'

export type TTag = {
  name: string
  enabled: boolean
}

const Programma = ({ data: { prismicProgramPage, allPrismicEvent } }: { data: Query }) => {
  const [tags, setTags] = React.useState<TTag[]>([])
  const [initialized, setInitialized] = React.useState(false)

  const programPageData = idx(prismicProgramPage, _ => _.data)
  const events = idx(allPrismicEvent, _ => _.edges.map(event => event.node))

  const { title = 'Programma', subtitle = '' } = { ...programPageData }

  if (events) {
    // @ts-ignore
    events.sort((a, b) => new Date(a.data.date) - new Date(b.data.date))
    React.useEffect(() => {
      if (!initialized) {
        setTags(getAllTags(events) as TTag[])
      }
      setInitialized(true)
    })
  }

  const eventsData = idx(events, _ =>
    _.map(e => ({
      ...e.data,
      section: new Date(e.data.date) > new Date() ? parse(format(e.data.date, 'YYYY-MM-DD', { locale })) : 'afgelopen',
    }))
  )

  const eventsSorted = eventsData && groupBy(eventsData, 'section')

  const datesSorted = Object.keys(eventsSorted || {})
    // @ts-ignore
    .sort((a, b) => a - b)
    .filter(e => e !== 'afgelopen')

  return (
    <Layout>
      <Helmet title="Programma" />
      <HeaderSmall
        title={title}
        subtitle={subtitle}
        picture={(programPageData && programPageData.header_image.url) || ''}
      />
      <div className="inner-container" style={{ margin: '32px auto' }}>
        {/* <TagFilter tags={tags} setTags={updatedTags => setTags(updatedTags)} /> */}
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

          {eventsSorted && !!eventsSorted.afgelopen && (
            <li>
              <h2 className="event-section-title">Afgelopen</h2>
              <EventSectionWrap>
                {eventsSorted.afgelopen.map((e, i) => (
                  <li>
                    <EventCard event={e} index={i} isTeaser isOver />
                  </li>
                ))}
              </EventSectionWrap>
            </li>
          )}
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
