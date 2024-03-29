import { TEvent } from '@components/EventCard/EventCard'
import { format, isSameMonth } from 'date-fns'
// @ts-ignore
import nl from 'date-fns/locale/nl'

export const getInstagramPostUrl = (id: string) => `https://www.instagram.com/p/${id}/`

export const cleanUrl = (url: string): string => url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]

export const getHeaderDate = (startDate: Date, endDate: Date): string => {
  const sameMonth = isSameMonth(startDate, endDate)
  const FORMAT = 'D MMMM'
  const formatOptions = { locale: nl }

  return `${format(startDate, `${!sameMonth ? FORMAT : 'D'}`, formatOptions)}
    - ${format(endDate, FORMAT, formatOptions)}`
}

export const getAllTags = (events: Array<{ data: TEvent }>) =>
  events &&
  Array.from(
    new Set(
      [].concat(
        // @ts-ignore
        ...events.map(({ data: event }) => event.tags && event.tags.split(',').map(tag => tag.trim()))
      )
    )
  )
    .sort()
    .map(tag => ({
      enabled: true,
      name: tag,
    }))
