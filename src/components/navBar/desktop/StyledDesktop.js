import styled from 'styled-components';

const StyledDesktop = styled.nav`
  display: flex;
  align-items: center;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  a {
    font-size: 14px;
    margin: 0 16px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    cursor: pointer;
  }

  a.active {
    color: ${props => props.theme.support04};
  }

  a:hover {
    color: ${props => props.theme.support04};
  }

  .dropdown {
    position: absolute;
    top: 36px;
    left: 230px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

export default StyledDesktop;
