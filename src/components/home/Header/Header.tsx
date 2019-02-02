import * as React from 'react'
import { ContentContainer, Date, InfoWrapper, Location, Logo, Video, VideoOverlay, Wrap } from './Header.styled'

type TProps = {
  video: string | null | undefined
  image: string
}

const Header = ({ video, image }: TProps) => (
  <Wrap>
    <ContentContainer className="inner-container">
      <Logo src={require('@assets/images/calamartes_logo.png')} alt="calamartes logo" />
      <InfoWrapper>
        <Date>11-12 april</Date>
        <Location>Universiteit Antwerpen</Location>
      </InfoWrapper>
    </ContentContainer>
    {!!video && (
      <React.Fragment>
        <VideoOverlay />
        <Video autoPlay={true} muted={true} loop={true} placeholder={image} poster={image}>
          <source src={video} type="video/mp4" />
          <img src={image} alt="" width="100%" height="100%" />
        </Video>
      </React.Fragment>
    )}
  </Wrap>
)

export default Header
