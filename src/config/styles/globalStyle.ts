import richTextStyle from '@config/styles/richTextStyle'
import slickStyle from '@config/styles/slickStyle'
import { css } from '@config/styles/styled-components'
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

  body {
    background-color: ${theme.colors.neutral01};
    ${theme.typo.textstyle.paragraph};
    font-display: auto;
  }

  .richtext {
    ${richTextStyle}
  }

  strong {
    font-weight: ${theme.typo.fontweights.bold};
  }

  address {
    white-space: pre;
    display: block;
  }

  .inner-container {
    width: 94%;
    max-width: ${theme.grid.maxWidth};
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.m}) {
      width: 90%;
    }
  }

  .hide {
    display: none;
  }

  .truncate {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  h1 {
    ${theme.typo.textstyle.heading01}
  }

  h2 {
    ${theme.typo.textstyle.heading02}

    &.event-section-title {
      color: ${theme.colors.global01};
      margin: 52px 0 36px;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  h3 {
    ${theme.typo.textstyle.heading03}
  }

  p {
    ${theme.typo.textstyle.paragraph};
    white-space: pre-line;

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
