import styled from 'styled-components';
import logo from './logo-asi.svg';

const StyledCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;

  & > div {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: ${props => props.theme.support04};
    background: transparent url(${logo}) 50% no-repeat;
    background-size: contain;
  }

  a {
    opacity: 0;
  }

  small {
    font-weight: 550;
    margin: 0.3rem 0.6rem 0;
  }

  @media only screen and (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

export default StyledCopyright;
