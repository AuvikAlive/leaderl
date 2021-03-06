import styled from 'styled-components';

const StyledJoin = styled.div`
  background: ${props => props.theme.support04};
  padding: 3rem 0;
  color: white;
  text-align: center;
  position: relative;

  div {
    /* margin-bottom: 1rem; */
  }

  h4 {
    font-weight: 400;
  }

  .content {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .flex {
    display: flex;
    justify-content: center;
    p {
      font-size: 0.875rem;
      margin: 0 0.5rem;
    }
  }
`;

export default StyledJoin;
