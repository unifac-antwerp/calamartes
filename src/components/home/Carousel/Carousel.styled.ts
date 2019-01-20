import { TTheme } from '@config/styles/theme.type'
import Slider from 'react-slick'
import styled from 'styled-components'

export const StyledSlider = styled(Slider)`
  position: relative;

  .slick-arrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }: { theme: TTheme }) => theme.colors.neutral01};
    z-index: 10;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    ${({ theme }: { theme: TTheme }) => theme.shadows.shadow01};

    &:hover {
      cursor: pointer;
    }
  }

  .slick-next {
    transform: translate(50%, -50%);
    right: 0;
  }
`

export const ArrowWrap = styled.div`
  ${({ prev }: { prev?: boolean }) => prev && `transform: scaleX(-1)`}
`
