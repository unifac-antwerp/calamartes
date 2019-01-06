import * as React from 'react'

const SvgComponent = (props: any) => (
  <svg width={18} height={18} {...props}>
    <g
      transform="translate(1 1)"
      stroke="#FFF"
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width={16} height={16} rx={5} />
      <path d="M11.165 7.53a3.2 3.2 0 1 1-6.33.94 3.2 3.2 0 0 1 6.33-.94z" />
    </g>
  </svg>
)

export default SvgComponent
