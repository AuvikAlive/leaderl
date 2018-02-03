import React from 'react';
import StyledFooter from './StyledFooter';
import Copyright from './copyright/Copyright';
import List from './list/List';
import SocialList from './socialList/SocialList';

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright />

      <List />

      <SocialList className="social" />
    </StyledFooter>
  );
};

export default Footer;
