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
  z-index: -100;
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%);
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
