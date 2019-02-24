import styled from '@config/styles/styled-components'

export const Wrap = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral04};
  padding: 40px 0;
`

export const InnerWrap = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
