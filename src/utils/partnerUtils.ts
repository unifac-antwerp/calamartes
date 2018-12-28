import { get } from 'lodash'
import { PrismicPartner, PrismicPartnerConnection } from '../graphql'

export enum PartnerType {
  friend = 'Friend',
  main = 'Main Partner',
}

export const getPartnersByType = (
  partnerArray: PrismicPartnerConnection | null | undefined,
  type: PartnerType
): Array<PrismicPartner | null | undefined> => {
  if (partnerArray && partnerArray.edges) {
    return partnerArray.edges
      .filter(item => item && item.node && item.node.data && item.node.data.type === type)
      .map(i => i && i.node)
  }
  return []
}

export const sortPartners = (
  partners: Array<PrismicPartner | null | undefined>
): Array<PrismicPartner | null | undefined> =>
  partners.sort(
    (a, b) =>
      a &&
      b &&
      (get(b, 'data.importance') - get(a, 'data.importance') || get(a, 'data.name').localeCompare(get(b, 'data.name')))
  )

// TODO: sortHomepagePartners
