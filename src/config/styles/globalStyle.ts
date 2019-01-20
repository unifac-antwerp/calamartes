import { headroomStyle } from '@components/Navigation/Navigation.styled'
import slickStyle from '@config/styles/slickStyle'
import { css } from 'styled-components'
import { theme } from './theme'

export default css`
  ${slickStyle}
  ${headroomStyle}

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
  }

  body {
    background-color: ${theme.colors.neutral01};
    ${theme.typo.textstyle.paragraph};
  }

  strong {
    font-weight: ${theme.typo.fontweights.bold};
  }

  .innerContainer {
    width: 90%;
    max-width: ${theme.grid.maxWidth};
    margin: 0 auto;
  }

  .hide {
    display: none;
  }

  h1 {
    ${theme.typo.textstyle.heading01}
  }

  h2 {
    ${theme.typo.textstyle.heading02}
  }

  p {
    ${theme.typo.textstyle.paragraph};

    :not(:last-child) {
      margin-bottom: 16px;
    }
  }

  a {
    ${theme.typo.textstyle.inlinelink};
  }

  ::selection {
    color: ${theme.colors.neutral01};
    background: ${theme.colors.global02};
  }
`
