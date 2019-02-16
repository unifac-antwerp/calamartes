import { HeaderSmall, Layout } from '@components'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'

const Programma = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allPrismicProgramPage }: Query) => {
      const homepageData = idx(allPrismicProgramPage, _ => _.edges[0].node.data)
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
            <h2 style={{ color: '#232F45', fontSize: 18, marginTop: 24 }}>Coming Soon...</h2>
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
  }
`
