import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledMobileLinks from './StyledMobileLinks';

const MobileLinks = ({ onClick }) => {
  return (
    <StyledMobileLinks>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/membership">Membership</NavLink>
      </li>
      <li>
        <NavLink to="/activities">Activities</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/training">Training</NavLink>
      </li>
      <li>
        <NavLink to="/giving">Giving</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </StyledMobileLinks>
  );
};
export default MobileLinks;
