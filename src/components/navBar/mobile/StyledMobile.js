import styled from 'styled-components';

const StyledMobile = styled.nav`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 1.25rem;
    height: 1.25rem;
    right: 1.25rem;
    top: 0.8rem;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${props => props.theme.ui01};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    right: 19px !important;
    top: 12px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${props => props.theme.ui01};
    width: 3px !important;
    height: 17px !important;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${props => props.theme.text01};
    padding: 2.5em 0;
    font-size: 1rem;
    overflow: hidden !important;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    /* padding: 0.8em; */
    margin-top: 8px;
    border-top: 1.5px solid #fff;
  }

  /* Styling of overlay */
  .bm-overlay {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .bm-menu-wrap {
    top: 0;
    width: 380px !important;
  }

  .bm-burger-bars {
    height: 3px !important;
    margin: 2px 0 !important;
  }

  @media only screen and (min-width: 769px) {
    display: none;
    visibility: hidden;
  }

  @media only screen and (max-width: 576px) {
    .bm-menu-wrap {
      width: 100% !important;
    }
  }
`;

export default StyledMobile;
