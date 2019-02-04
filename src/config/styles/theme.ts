import { darken, lighten } from 'polished'
import { css } from 'styled-components'

/* tslint:disable:object-literal-sort-keys */

const colors = {
  neutral01: '#ffffff',
  neutral02: '#000000',
  neutral03: '#2F2F2F',
  neutral04: darken(0.05, '#ffffff'),
  global01: '#232F45',
  global02: lighten(0.1, '#232F45'),
  global03: lighten(0.15, '#232F45'),
  global04: darken(0.1, '#232F45'),
}

const shadows = {
  shadow01: css`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,
}

const overlays = {
  plusPatternFill: css`
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      background-image: url(${require('@assets/images/plus_pattern.png')});
      background-size: 140px;
    }
  `,
  plusPattern: css`
    content: '';
    opacity: 0.1;
    display: block;
    background-image: url(${require('@assets/images/plus_pattern.png')});
    background-size: 140px;
  `,
}

const grid = {
  maxWidth: '1200px',
}

const breakpoints = {
  xs: '400px',
  s: '600px',
  m: '900px',
  l: '1200px',
  xl: '1800px',
}

const fonts = {
  heading: "'Poppins', sans-serif",
  default: "'Roboto', sans-serif",
}

const fontweights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
}

const textstyle = {
  heading01: css`
    font-family: ${fonts.heading};
    font-size: 36px;
    font-weight: ${fontweights.bold};
    color: ${colors.neutral01};
  `,
  heading02: css`
    font-family: ${fonts.heading};
    font-size: 26px;
    font-weight: ${fontweights.bold};
    color: ${colors.neutral01};

    @media (min-width: ${breakpoints.m}) {
      font-size: 36px;
    }
  `,
  heading03: css`
    font-family: ${fonts.heading};
    font-size: 20px;
    font-weight: ${fontweights.bold};
    color: ${colors.neutral02};
  `,
  paragraph: css`
    font-family: ${fonts.default};
    font-size: 16px;
    font-weight: ${fontweights.normal};
    line-height: 150%;
    color: ${colors.neutral03};

    @media (min-width: ${breakpoints.m}) {
      font-size: 17px;
    }
  `,
  inlinelink: css`
    font-family: ${fonts.default};
    font-size: 16px;
    font-weight: ${fontweights.normal};
    line-height: 150%;
    color: ${colors.neutral03};
    text-decoration: underline;

    @media (min-width: ${breakpoints.m}) {
      font-size: 17px;
    }
  `,
}

export const theme = {
  colors,
  typo: {
    fonts,
    fontweights,
    textstyle,
  },
  overlays,
  grid,
  breakpoints,
  shadows,
}
