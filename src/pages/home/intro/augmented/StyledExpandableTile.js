import styled from 'styled-components';
import { ExpandableTile } from 'carbon-components-react';

const StyledExpandableTile = styled(ExpandableTile)`
  background: ${props => props.theme.text01};
  border-color: ${props => props.theme.text01};
  color: white;

  .bx--tile-content__above-the-fold {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }

  .bx--tile-content__below-the-fold {
    transform: translate3D(0, -100%, 0);
    /* color: ${props => props.theme.text02}; */
    position: relative;
    left: 3rem;
  }
`;

export default StyledExpandableTile;
