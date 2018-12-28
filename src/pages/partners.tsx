import { Layout } from '@components'
import cleanUrl from '@utils/cleanUrl'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'

const Partners = () => (
  <StaticQuery
    query={graphql`
      query allPrismicPartnersQuery {
        allPrismicPartner {
          edges {
            node {
              data {
                name
                image {
                  localFile {
                    childImageSharp {
                      fixed(width: 200) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
                link {
                  url
                }
                description
                type
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h1>Partners</h1>
        <ol>
          {data.allPrismicPartner.edges.map((item: any) => (
            <li key={item.node.data.name}>
              <a href={item.node.data.link.url} target="_blank">
                <p>
                  {item.node.data.name} ({item.node.data.type})
                </p>
                <p>{cleanUrl(item.node.data.link.url)}</p>
                <p>
                  {!!item.node.data.description && item.node.data.description}
                </p>
                <Img
                  fixed={item.node.data.image.localFile.childImageSharp.fixed}
                />
              </a>
            </li>
          ))}
        </ol>
        {console.log(data.allPrismicPartner.edges)}
      </Layout>
    )}
  />
)

export default Partners
