import { getHeaderDate } from '@utils'
import * as React from 'react'
import { ContentContainer, Date, InfoWrapper, Location, Logo, Video, VideoOverlay, Wrap } from './Header.styled'

type TProps = {
  video: string | null | undefined
  image: string
  location: string
  startDate: Date
  endDate: Date
}

const Header = ({ video, image, location, startDate, endDate }: TProps) => (
  <Wrap>
    <ContentContainer className="inner-container">
      <Logo src={require('@assets/images/calamartes_logo.png')} alt="calamartes logo" />
      <InfoWrapper>
        <Date>{getHeaderDate(startDate, endDate)}</Date>
        <Location>{location}</Location>
      </InfoWrapper>
    </ContentContainer>
    {!!video && (
      <React.Fragment>
        <VideoOverlay />
        <Video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </Video>
      </React.Fragment>
    )}
  </Wrap>
)

export default Header
