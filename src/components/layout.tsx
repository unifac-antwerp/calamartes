import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../config/styles'
import Header from './header'

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
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout
