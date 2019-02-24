import Arrow from '@assets/svg/Arrow'
import { Button } from '@components/Button'
import EventCard, { TEvent } from '@components/EventCard/EventCard'
import * as React from 'react'
import { Settings } from 'react-slick'
import { ArrowWrap, StyledSlider, Wrap } from './EventsTeaser.styled'

type TProps = {
  events: TEvent[]
}

const EventsTeaser = (props: TProps) => {
  const { events } = props

  const sliderSettings: Settings = {
    easing: 'ease-in-out',
    infinite: false,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    slidesToShow: 3,
    speed: 400,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return !!events ? (
    <Wrap>
      {/* second wrapper to add another ornament */}
      <div className="inner-container">
        <h2 style={{ width: '80vw' }}>Volgende Evenementen</h2>
        <StyledSlider {...sliderSettings}>
          {events.map(event => (
            <EventCard key={event.title} event={event} isTeaser />
          ))}
        </StyledSlider>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Button text="Bekijk het Programma" link="/programma" />
        </div>
      </div>
    </Wrap>
  ) : null
}

const CustomArrow = (props: { className?: string; onClick?: () => void }) => {
  const { className, onClick } = props
  const prev = (className && className.indexOf('slick-prev') >= 0) || false

  return (
    <div className={className} onClick={onClick}>
      <ArrowWrap prev={prev}>
        <Arrow />
      </ArrowWrap>
    </div>
  )
}

export default EventsTeaser
