import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import StyledMobile from './StyledMobile';
import MobileLinks from './MobileLinks';

const Mobile = ({ onClick }) => {
  return (
    <StyledMobile>
      <Menu right>
        <MobileLinks onClick={onClick} />
      </Menu>
    </StyledMobile>
  );
};

export default Mobile;
