import styled from 'styled-components';
import building from './building-min.png';

const StyledJumbotron = styled.div`
  margin-top: 48px;
  height: 26rem;
  background: ${props => props.theme.darkBackground} url(${building}) center
    no-repeat;
  background-size: 100%;
  background-position-y: 40%;
  color: #fff;
  position: relative;

  &:before {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
    background-color: rgba(33, 52, 62, 0.6);
  }

  .bx--grid,
  .bx--row {
    height: 100%;
  }

  @media only screen and (max-width: 2000px) {
    background-size: 120%;
  }

  @media only screen and (max-width: 1700px) {
    background-size: 140%;
  }

  @media only screen and (max-width: 1400px) {
    background-size: 180%;
  }

  @media only screen and (max-width: 1100px) {
    background-size: 220%;
  }

  @media only screen and (max-width: 900px) {
    background-size: 260%;
  }

  @media only screen and (max-width: 800px) {
    background-size: 300%;
  }

  @media only screen and (max-width: 700px) {
    background-size: 350%;
  }

  @media only screen and (max-width: 600px) {
    background-size: 400%;
  }

  @media only screen and (max-width: 550px) {
    background-position-y: 42%;
  }

  @media only screen and (max-width: 450px) {
    background-position-y: 45%;
  }

  @media only screen and (max-width: 400px) {
    background-position-y: 48%;
  }

  @media only screen and (max-width: 350px) {
    background-position-y: 52%;
  }

  @media only screen and (max-width: 335px) {
    background-position-y: 54%;
  }
`;

export default StyledJumbotron;
