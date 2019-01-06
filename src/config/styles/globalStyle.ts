import { headroomStyle } from '@components/Navigation/Navigation.styled'
import slickStyle from '@config/styles/slickStyle'
import { css } from 'styled-components'

export default css`
  ${slickStyle}
  ${headroomStyle}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: white;
  }

  .hide {
    display: none;
  }
`
