import { Link } from 'gatsby'
import * as React from 'react'
import { Button } from './Button.styled'

type TProps = {
  link: string
  text: string
  light?: boolean
}

const ButtonComponent = ({ text, link, light = false }: TProps) => (
  <Link to={link}>
    <Button light={light}>{text}</Button>
  </Link>
)

export default ButtonComponent
