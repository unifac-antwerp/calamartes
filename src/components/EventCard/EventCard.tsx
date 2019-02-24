import { Button } from '@components'
import { format } from 'date-fns'
// @ts-ignore
import locale from 'date-fns/locale/nl'
import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import { Description, Info, InfoWrap, LinkWrap, StyledImage, Tag, TagWrap, Title, Wrap } from './EventCard.styled'

export type TEvent = {
  title?: string
  date?: Date
  tags?: string
  facebook_link?: {
    url: string
  }
  image: {
    localFile: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
  sign_up_link?: {
    url: string
  }
  short_description?: string
  organizer?: string
}

type TProps = {
  event: TEvent
  index?: number
  isTeaser?: boolean
  isOver?: boolean
}

const EventCard = ({ event, index, isTeaser, isOver }: TProps) => {
  const tags = event.tags ? event.tags.split(',').map(tag => tag.trim()) : []

  return (
    <Wrap index={index}>
      <StyledImage fluid={event.image.localFile.childImageSharp.fluid} />
      <LinkWrap>
        {event.facebook_link && (
          <li className="link">
            <Button external link={event.facebook_link.url} text="Facebook" />
          </li>
        )}
        {event.sign_up_link && !isOver && (
          <li className="link">
            <Button external link={event.sign_up_link.url} text="Inschrijven" />
          </li>
        )}
      </LinkWrap>

      <InfoWrap>
        <Title className={isTeaser ? 'truncate' : ''}>{event.title}</Title>
        <Info className={isTeaser ? 'truncate' : ''}>
          {event.organizer}
          {event.date &&
            (!isTeaser
              ? ` - ${format(event.date, 'HH:mm', { locale })}`
              : ` - ${format(event.date, 'dddd D MMM.', { locale })} om ${format(event.date, 'HH:mm', {
                  locale,
                })}`)}
        </Info>
        {!isTeaser && (
          <TagWrap>
            {tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagWrap>
        )}
        {event.short_description && !isTeaser && <Description>{event.short_description}</Description>}
      </InfoWrap>
    </Wrap>
  )
}

export default EventCard
