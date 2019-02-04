import { Link } from 'gatsby'
import * as React from 'react'
import { Button } from './Button.styled'

type TProps = {
  link: string
  text: string
  light?: boolean
  external?: boolean
}

const ButtonComponent = ({ text, link, light = false, external = false }: TProps) => {
  const btn = <Button light={light}>{text}</Button>

  const wrapperStyle = {
    display: 'inline-block',
  }

  return external ? (
    <a href={link} target={link.startsWith('mailto') ? '' : '_blank'} rel="noopener" style={wrapperStyle}>
      {btn}
    </a>
  ) : (
    <Link to={link} style={wrapperStyle}>
      {btn}
    </Link>
  )
}

export default ButtonComponent
