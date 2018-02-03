import Styled from 'styled-components';

export const StyledBackgroundVideo = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    height: 100vmax;
    width: auto;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;
