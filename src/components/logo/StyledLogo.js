import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLogo = styled(NavLink)`
  text-decoration: none;
  color ${props => props.theme.ui01};
  margin-right: 16px;
  font-size: 14px;
`;

export default StyledLogo;
