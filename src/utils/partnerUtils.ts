import idx from 'idx'
import { get } from 'lodash'
import { TPartnerHomepage } from 'src/pages'
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

export const sortHomepagePartners = (partnerArray: PrismicPartnerConnection | null | undefined): TPartnerHomepage[] =>
  (!!idx(partnerArray, _ => _.edges) &&
    idx(partnerArray, _ => _.edges)!
      .map(item => ({
        image: item.node.data.image.url,
        importance: item.node.data.importance,
        name: item.node.data.name,
        url: item.node.data.link.url,
      }))
      .sort((a, b) => b.importance - a.importance)) ||
  []
