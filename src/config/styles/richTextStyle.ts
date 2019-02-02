import { css } from 'styled-components'

const mediaCSS = css`
  width: 100% !important;
  margin: 32px 0;
`

export default css`
  padding: 40px 0;
  max-width: 960px;

  iframe {
    ${mediaCSS}
    /* height: 32vw !important; */
    /* max-height: 540px !important; */

    .vp-center {
      display: block !important;
    }
  }

  img {
    ${mediaCSS}
  }
`
