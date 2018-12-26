import { Header } from '@components'
import withConnectors from '@connectors'
import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { SiteWrap } from './Layout.styled'

type TProps = {
  children: React.ReactNode
}

const Layout = ({ children }: TProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <SiteWrap>{children}</SiteWrap>
      </React.Fragment>
    )}
  />
)

export default withConnectors(Layout)
