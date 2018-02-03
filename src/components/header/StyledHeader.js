import styled from 'styled-components';

const StyledHeader = styled.div`
  background: ${props => props.theme.text01};
  color: white;
  padding: 0 20px;
  height: 48px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* sticky nav */
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
`;

export default StyledHeader;
