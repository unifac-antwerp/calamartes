import * as React from 'react'

const SvgComponent = (props: any) => (
  <svg width={11} height={18} {...props}>
    <path
      d="M9.8 1H7.4a4 4 0 0 0-4 4v2.4H1v3.2h2.4V17h3.2v-6.4H9l.8-3.2H6.6V5a.8.8 0 0 1 .8-.8h2.4V1z"
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
