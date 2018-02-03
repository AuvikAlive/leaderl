import styled from 'styled-components';

export const StyledSection = styled.div`
  padding: 6rem 0;

  .bx--row {
    align-items: center;
    position: relative;

    @media only screen and (min-width: 1600px) {
      /* justify-content: center; */
    }
  }

  .content {
    /* position: relative;
    left: 25%; */

    @media only screen and (max-width: 768px) {
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }

  @media only screen and (max-width: 767px) {
    .parallax {
      display: none;
    }
  }

  h4 {
    position: relative;
  }

  h4:after {
    content: '';
    background: ${props => props.theme.support04};
    width: 25px;
    height: 1px;
    position: absolute;
    bottom: -15px;
    left: 0;

    @media only screen and (max-width: 767px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  p {
    margin: 3rem 0;
    color: ${props => props.theme.text02};
  }

  img {
    width: 100%;
  }
`;
