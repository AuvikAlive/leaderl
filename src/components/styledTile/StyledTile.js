import styled from 'styled-components';
import { Tile } from 'carbon-components-react';

const StyledTile = styled(Tile)`
  background: ${props => props.theme.text01};
  border-color: ${props => props.theme.text01};
  color: white;
`;

export default StyledTile;
