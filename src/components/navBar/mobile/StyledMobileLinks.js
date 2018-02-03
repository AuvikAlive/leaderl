import styled from 'styled-components';

const StyledMobileLinks = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    padding: 0.8rem 1.25rem;

    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.ui01};
  }

  a.active {
    color: ${props => props.theme.support04};
  }

  li:hover {
    background: ${props => props.theme.ui01};

    a {
      color: ${props => props.theme.text01};
    }
  }
`;

export default StyledMobileLinks;
