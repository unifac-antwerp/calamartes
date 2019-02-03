import { Footer, Navigation } from '@components'
import withConnectors from '@connectors'
import { graphql, StaticQuery } from 'gatsby'
import idx from 'idx'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Query } from 'src/graphql'
import { Link } from 'styled-icons/boxicons-regular/Link'
import { Facebook } from 'styled-icons/fa-brands/Facebook'
import { Instagram } from 'styled-icons/fa-brands/Instagram'
import { Linkedin } from 'styled-icons/fa-brands/Linkedin'
import { SiteWrap } from './Layout.styled'

type TProps = {
  children: React.ReactNode
}

export type TSocialItem = {
  link: string
  name: string
  icon: JSX.Element
}

const Layout = ({ children }: TProps) => (
  <StaticQuery
    query={layoutQuery}
    render={({ allPrismicGeneral }: Query) => {
      const generalData = idx(allPrismicGeneral, _ => _.edges[0].node.data)

      const { site_title = 'Calamartes', site_subtitle = 'Cultuurfestival', address = '', phone = '', email = '' } = {
        ...generalData,
      }

      const socials =
        generalData &&
        ([
          {
            icon: <Instagram />,
            link: generalData.instagram_link.url,
            name: 'Instagram',
          },
          {
            icon: <Facebook />,
            link: generalData.facebook_link.url,
            name: 'Facebook',
          },
          {
            icon: <Linkedin />,
            link: generalData.linkedin.url,
            name: 'Linkedin',
          },
          {
            icon: <Link />,
            link: generalData.unifac_website.url,
            name: 'Unifac Website',
          },
        ] as TSocialItem[])

      return (
        <React.Fragment>
          <Helmet titleTemplate={`%s - ${site_title}`} defaultTitle={site_title} />
          <Navigation
            title={site_title}
            subtitle={site_subtitle}
            facebookLink={(!!generalData && generalData.instagram_link.url) || '#'}
            instagramLink={(!!generalData && generalData.facebook_link.url) || '#'}
          />
          <SiteWrap>{children}</SiteWrap>
          <Footer address={address} phone={phone} email={email} socials={socials!} />
        </React.Fragment>
      )
    }}
  />
)

const layoutQuery = graphql`
  {
    allPrismicGeneral {
      edges {
        node {
          data {
            instagram_link {
              url
            }
            facebook_link {
              url
            }
            linkedin {
              url
            }
            site_title
            site_subtitle
            address
            phone
            email
            unifac_website {
              url
            }
          }
        }
      }
    }
  }
`

export default withConnectors(Layout)
