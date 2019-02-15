import styled from '@config/styles/styled-components'

export const Wrap = styled.section`
  background-color: ${({ theme }) => theme.colors.global01};
  position: relative;
  ${({ theme }) => theme.overlays.plusPatternFill};
  padding-bottom: 64px;
`

export const Title = styled.h2`
  padding: 64px 0 48px;
`

export const List = styled.ol`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  width: 100%;
  margin-bottom: 2vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 49%;
  }
`
