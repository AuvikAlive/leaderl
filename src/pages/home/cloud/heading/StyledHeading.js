import styled from 'styled-components';

const StyledHeading = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  p {
    color: ${props => props.theme.text02};
    text-align: center;
  }
`;

export default StyledHeading;
