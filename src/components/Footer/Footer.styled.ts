import styled from '@config/styles/styled-components'

export const Wrap = styled.footer`
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.global04};
  color: ${({ theme }) => theme.colors.neutral01};
  padding: 24px 0;
  font-size: 14px;

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.neutral01};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.neutral04};
      text-decoration: underline;
    }
  }
`

export const List = styled.ol`
  > * {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
  margin-bottom: 32px;
`

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MadeBy = styled.span`
  text-align: center;
  display: block;
  font-size: 12px;

  .emoji,
  div {
    display: inline-block;
    width: 12px;
    height: 12px;
  }
`
