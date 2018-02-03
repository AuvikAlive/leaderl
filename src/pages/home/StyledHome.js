import Styled from 'styled-components';
import img from './1440px-grid-cropped.png';

export const StyledHome = Styled.div`
  .static-image {
    display: none;
  }

  .grid {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: url(${img}) no-repeat;
    background-size: contain;
    opacity: 0.1;
  }

  @media only screen and (max-width: 767px) {
    .servers {
      display: none;
    }
    .static-image {
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;

      img {
        width: 66.66%;
      }
    }
  }
`;
