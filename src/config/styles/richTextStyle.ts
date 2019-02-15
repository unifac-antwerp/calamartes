import { css } from '@config/styles/styled-components'
import { theme } from './theme'

const mediaCSS = css`
  margin: 32px 0;
  background-color: ${theme.colors.neutral02};
`

export default css`
  padding: 40px 0;
  max-width: 960px;

  li {
    list-style: square;
    margin-left: 32px;

    &:last-child {
      margin-bottom: 16px;
    }
  }

  div[data-oembed-provider='Vimeo'] {
    padding: 56.5% 0 0 0 !important;
    position: relative !important;
    ${mediaCSS}
  }

  iframe {
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;

    .vp-center {
      display: block !important;
    }
  }

  img {
    width: 100% !important;
    ${mediaCSS}
  }
`
