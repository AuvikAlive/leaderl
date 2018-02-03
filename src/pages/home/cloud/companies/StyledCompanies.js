import styled from 'styled-components';

const StyledCompanies = styled.div`
  background: ${props => props.theme.ui02};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 500px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    position: relative;
    height: auto;
  }

  @media only screen and (min-width: 769px) {
    div {
      position: relative;
      top: 55%;
      left: 50%;
      width: 66.66%;
      transform: translateX(-50%);
    }
  }

  p {
    text-align: center;
    font-weight: bold;
    color: gray;
    margin-bottom: 1.5rem;
  }

  .logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    img {
      /* width: 10%; */
    }
  }
`;

export default StyledCompanies;
