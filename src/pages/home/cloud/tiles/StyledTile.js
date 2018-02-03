import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTile = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.text01};
  padding-top: 3rem;
  /* height: 432px; */
  background: ${props => props.theme.ui01};
  border-radius: 3px;
  border: 1px solid ${props => props.theme.ui04};
  margin-bottom: 2rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  @media (max-width: 575px) {
    /* height: 600px; */
    height: 110vw;
  }

  @media (min-width: 576px) {
    height: 75vw;
  }

  @media (min-width: 768px) {
    height: 50vw;
  }

  @media (min-width: 992px) {
    height: 35vw;
  }

  @media (min-width: 1200px) {
    height: 30vw;
  }

  @media (min-width: 1600px) {
    height: 25vw;
  }

  p {
    text-align: center;
    padding: 0 1rem 1rem;
    color: ${props => props.theme.text02};
  }

  img {
    width: 100%;
    transform: translateY(5%);
    transition: all 0.3s ease-out;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &:hover {
    border-color: ${props => props.color};
    img {
      transform: translateY(1%);
    }
  }
`;
