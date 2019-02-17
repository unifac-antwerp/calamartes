import { format } from 'date-fns'
// @ts-ignore
import nl from 'date-fns/locale/nl'
import Img, { FluidObject } from 'gatsby-image'
import * as React from 'react'

type TEvent = {
  title: string
  date: Date
  tags: string
  facebook_link: {
    url: string
  }
  image: {
    localFile: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
  sign_up_link: {
    url: string
  }
  short_description: string
  organizer: string
}

type TProps = {
  event: TEvent
}

const EventCard = ({ event }: TProps) => {
  const tags = event.tags.split(',').map(tag => tag.trim())

  return (
    <article>
      <h3>{event.title}</h3>
      <span>{event.organizer}</span>
      <br />
      <span>{format(event.date, 'D MMMM - HH:mm', { locale: nl })}</span>
      <br />
      <span>{event.short_description}</span>
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a href={event.sign_up_link.url} target="_blank" rel="noopener">
        Inschrijven
      </a>
      <br />
      <a href={event.facebook_link.url} target="_blank" rel="noopener">
        FB event
      </a>
      {/* <Img fluid={event.image.localFile.childImageSharp.fluid} /> */}
    </article>
  )
}

export default EventCard
