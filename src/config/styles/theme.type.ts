import { CSSObject } from 'styled-components'

export type TTheme = {
  colors: TColors
  typo: TTypo
  grid: TGrid
  overlays: TOverlays
  breakpoints: TBreakpoints
  shadows: TShadows
}

type TColors = {
  neutral01: string
  neutral02: string
  neutral03: string
  neutral04: string
  global01: string
  global02: string
  global03: string
  global04: string
}

type TFonts = {
  heading: string
  default: string
}

type TFontweights = {
  thin: number
  extraLight: number
  light: number
  normal: number
  medium: number
  semiBold: number
  bold: number
  extraBold: number
  black: number
}

type TTextstyle = {
  heading01: CSSObject
  heading02: CSSObject
  heading03: CSSObject
  paragraph: CSSObject
  inlinelink: CSSObject
}

type TTypo = {
  fonts: TFonts
  fontweights: TFontweights
  textstyle: TTextstyle
}

type TGrid = {
  maxWidth: string
}

type TBreakpoints = {
  xs: string
  s: string
  m: string
  l: string
  xl: string
}

type TShadows = {
  shadow01: CSSObject
  shadow02: CSSObject
}

type TOverlays = {
  plusPattern: CSSObject
  plusPatternFill: CSSObject
}
