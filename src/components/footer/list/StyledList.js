import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0;
  margin-top: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 1.5rem;

  li {
    display: inline-block;
    text-align: center;
  }

  & > li:first-child {
    padding-right: 20px;
    margin-right: 15px;
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
    line-height: 30px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.7rem;
  }

  a:hover {
    color: ${props => props.theme.support04};
  }
`;

export default StyledList;
