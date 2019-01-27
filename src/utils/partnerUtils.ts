import idx from 'idx'
import { get } from 'lodash'
import { PrismicPartner, PrismicPartnerConnection } from '../graphql'

export enum PartnerType {
  friend = 'Friend',
  main = 'Main Partner',
}

export const getPartnersByType = (
  partnerArray: PrismicPartnerConnection | null | undefined,
  type: PartnerType
): Array<PrismicPartner | null | undefined> =>
  !!idx(partnerArray, _ => _.edges)
    ? idx(partnerArray, _ => _.edges)!
        .filter(item => idx(item, _ => _.node.data.type) === type)
        .map(item => item.node)
    : []

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
