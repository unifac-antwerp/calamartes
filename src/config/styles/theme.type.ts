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
  global01: string
  global02: string
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
  paragraph: CSSObject
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
  s: string
  m: string
  l: string
  xl: string
}

type TShadows = {
  shadow01: CSSObject
}

type TOverlays = {
  plusPattern: CSSObject
  plusPatternFill: CSSObject
}
