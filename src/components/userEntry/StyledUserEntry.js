import styled from 'styled-components';

const StyledUserEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-size: 14px;
    margin: 0 16px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: ${props => props.theme.support04};
  }

  button {
    margin-left: 16px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

export default StyledUserEntry;
