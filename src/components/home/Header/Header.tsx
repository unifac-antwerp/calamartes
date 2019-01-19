import * as React from 'react'
import { ContentContainer, Date, InfoWrapper, Location, Logo, Video, VideoOverlay, Wrap } from './Header.styled'

type TProps = {
  video: string
}

const Header = (props: TProps) => {
  const { video } = props

  return (
    <Wrap>
      <ContentContainer className="innerContainer">
        <Logo src={require('@assets/images/calamartes_logo.png')} alt="calamartes logo" />
        <InfoWrapper>
          <Date>11-12 april</Date>
          <Location>Universiteit Antwerpen</Location>
        </InfoWrapper>
      </ContentContainer>
      {!!video && (
        <React.Fragment>
          <VideoOverlay />
          <Video autoPlay={true} muted={true} loop={true}>
            <source src={video} type="video/mp4" />
          </Video>
        </React.Fragment>
      )}
    </Wrap>
  )
}

export default Header
