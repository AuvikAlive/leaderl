import styled from 'styled-components';

const StyledSocialList = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  padding: 0;
  margin-bottom: 3px;
  height: 30px;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-end;

  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4rem;
  }

  li {
    display: inline-block;
    margin-right: 0.5rem;
  }

  & > a {
    text-decoration: none;
    color: ${props => props.theme.ui01};
    padding-right: 20px;
    margin-right: 15px;
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
    line-height: 30px;
  }

  img {
    opacity: 1;
    transition: opacity 0.15s ease;
  }

  img:hover {
    opacity: 0.5;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    order: -1;

    & > a {
      display: none;
      visibility: hidden;
    }

    & > ul {
      margin-right: 0;
    }
  }
`;

export default StyledSocialList;
