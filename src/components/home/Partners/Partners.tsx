import { Partner, PartnerStyle } from '@components/Partner'
import * as React from 'react'
import { TPartnerHomepage } from 'src/pages'
import { InnerWrap, Wrap } from './Partners.styled'

type TProps = {
  partners: TPartnerHomepage[]
}

const Partners = ({ partners }: TProps) => (
  <Wrap>
    <div className="inner-container">
      <InnerWrap>
        {partners.map(partner => (
          <li key={partner.image}>
            <Partner image={partner.image} name={partner.name} styleName={PartnerStyle.default} link={partner.url} />
          </li>
        ))}
      </InnerWrap>
    </div>
  </Wrap>
)

export default Partners
