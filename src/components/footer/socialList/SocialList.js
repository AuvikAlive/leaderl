import React from 'react';
import StyledSocialList from './StyledSocialList';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import google from './google.svg';

const SocialList = () => {
  return (
    <StyledSocialList>
      <a href="mailto:hello@sherlockml.com">hello@sherlockml.com</a>

      <ul>
        <li>
          <a href="/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={google} alt="google" />
          </a>
        </li>
      </ul>
    </StyledSocialList>
  );
};

export default SocialList;
