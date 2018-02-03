import React from 'react';
import StyledHeader from './StyledHeader';
import NavBar from '../navBar/NavBar';
import Logo from '../logo/Logo';

const Header = () => (
  <StyledHeader>
    <Logo />

    <NavBar />
  </StyledHeader>
);

export default Header;
