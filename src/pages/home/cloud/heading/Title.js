import styled from 'styled-components';

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    width: 70%;
    position: relative;
    left: 15%;
  }
`;

export default Title;
