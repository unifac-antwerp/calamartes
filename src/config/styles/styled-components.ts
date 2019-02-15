import * as styledComponents from 'styled-components'
import TTheme from './theme.type.ts'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<TTheme>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
