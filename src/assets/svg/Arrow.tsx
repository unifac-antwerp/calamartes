import * as React from 'react'

const SvgComponent = (props: any) => (
  <svg width={12} height={18} {...props}>
    <path
      d="M11.781 8.931l.14.134-9.23 8.812-1.984-1.9 7.38-7.046-7.38-7.045 1.984-1.9 9.23 8.812-.14.133z"
      fill={props.fill || '#3D5174'}
      fillRule="evenodd"
    />
  </svg>
)

export default SvgComponent
