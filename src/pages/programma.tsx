import { EventCard, HeaderSmall, Layout } from '@components'
import { DetailPageWrap } from '@components/EventCard/EventCard.styled'
// @ts-ignore
import locale from 'date-fns/locale/nl'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
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

      return (
        <Layout>
          <Helmet title="Programma" />
          <HeaderSmall
            title={title}
            subtitle={subtitle}
            picture={(homepageData && homepageData.header_image.url) || ''}
          />
          <div className="inner-container">
            {/* <TagFilter tags={events && (getAllTags(events) as string[])} /> */}
            <DetailPageWrap>
              {events &&
                events
                  // @ts-ignore
                  .sort((a, b) => new Date(a.data.date) - new Date(b.data.date))
                  .map((event, i) => (
                    <li key={event.id}>
                      <EventCard event={event.data} index={i} />
                    </li>
                  ))}
            </DetailPageWrap>
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
