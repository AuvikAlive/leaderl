import Styled from 'styled-components';

export const StyledIntro = Styled.div`
  position: relative;
  /* top: 48px; */
  /* height: calc(100vh - 48px); */
  height: 100vh;
  color: white;
  background: ${props => props.theme.darkBackground};
  /* opacity: 0.9; */

  @media only screen and (max-width: 768px) {
    opacity: 1;
    height: auto;
    top: 48px;
    padding-bottom: 4rem;
  }

  .bx--grid {
    height: 100%;
  }

  .bx--row {
    height: 100%;
    /* justify-content: space-around; */
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1440px) and (max-width: 1599px) {
      justify-content: flex-start;
    }
  }
`;
