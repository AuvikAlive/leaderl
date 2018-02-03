import styled from 'styled-components';

const StyledCloud = styled.div`
  /* min-height: calc(100vh - 48px); */
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background: ${props => props.theme.ui01};
  /* padding-bottom: 12rem; */

  @media only screen and (max-width: 768px) {
    background: ${props => props.theme.ui02};
  }

  .bx--row {
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
  }
`;

export default StyledCloud;
