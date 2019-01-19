import { css } from 'styled-components'

/* tslint:disable:object-literal-sort-keys */

const colors = {
  neutral01: '#ffffff',
  neutral02: '#000000',
  global01: '#3D5174',
}

const shadows = {
  shadow01: css`
    box-shadow: 0 6px 18px 8px rgba(0, 0, 0, 0.05);
  `,
}

const breakpoints = {
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
  paragraph: css`
    font-family: ${fonts.default};
    font-size: 16px;
    font-weight: ${fontweights.normal};
    color: ${colors.neutral02};
  `,
}

export const theme = {
  colors,
  typo: {
    fonts,
    fontweights,
    textstyle,
  },
  breakpoints,
  shadows,
}
