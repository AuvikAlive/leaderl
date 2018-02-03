import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledDesktop from './StyledDesktop';

const Desktop = ({ isOpen, onClick }) => {
  return (
    <StyledDesktop>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/activities">Activities</NavLink>
        </li>
        <li>
          <NavLink to="/membership">Membership</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </StyledDesktop>
  );
};

export default Desktop;
