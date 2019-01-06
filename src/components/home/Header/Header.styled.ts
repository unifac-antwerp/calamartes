import styled from 'styled-components'

export const Wrap = styled.header`
  height: 100vh;
  background-color: black;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -10;
`

export const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
`

export const Logo = styled.img``

export const InfoWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Date = styled.span``

export const Location = styled.span``

export const VideoOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
`

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (min-aspect-ratio: 16/9) {
    height: 300%;
    top: -100%;
  }

  @media (max-aspect-ratio: 16/9) {
    width: 300%;
    left: -100%;
  }
`
