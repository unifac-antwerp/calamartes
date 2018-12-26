import { globalStyle, theme } from '@config/styles'
import * as React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${globalStyle}
`

export default (Component: React.StatelessComponent) =>
  class extends React.Component {
    public render() {
      return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Component {...this.props} />
          </React.Fragment>
        </ThemeProvider>
      )
    }
  }