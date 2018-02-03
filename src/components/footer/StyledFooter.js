import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.darkBackground};
  padding: 1.25rem 1.87rem;
  color: #fff;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid ${props => props.theme.field01};

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & > div,
    ul {
      margin: 0.5rem 0;
    }
  }
`;

export default StyledFooter;
