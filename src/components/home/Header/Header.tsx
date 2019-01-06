import * as React from 'react'
import { Overlay, Video, Wrap } from './Header.styled'

type TProps = {
  video: any
}

const Header = (props: TProps) => {
  const { video } = props

  return (
    <Wrap>
      {!!video && (
        <React.Fragment>
          <Overlay />
          <Video autoPlay={true} muted={true} loop={true}>
            <source src={video} type="video/mp4" />
          </Video>
        </React.Fragment>
      )}
    </Wrap>
  )
}

export default Header
