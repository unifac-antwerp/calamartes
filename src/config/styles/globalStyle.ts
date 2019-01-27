import slickStyle from '@config/styles/slickStyle'
import { css } from 'styled-components'
import { theme } from './theme'

/* tslint:disable:no-var-requires */

export default css`
  ${slickStyle}

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
    position: relative;

    &::after {
      content: '';
      background-image: url(${require('@assets/images/bg_pattern.png')});
      opacity: 0.4;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -999;
    }
  }

  strong {
    font-weight: ${theme.typo.fontweights.bold};
  }

  .inner-container {
    width: 96%;
    max-width: ${theme.grid.maxWidth};
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.s}) {
      width: 94%;
    }

    @media (min-width: ${theme.breakpoints.m}) {
      width: 90%;
    }
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

  h3 {
    ${theme.typo.textstyle.heading03}
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
