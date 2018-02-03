import React from 'react';
import StyledCopyright from './StyledCopyright';

const Copyright = () => {
  return (
    <StyledCopyright>
      <div>
        <a
          href="https://www.asidatascience.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ASI Data Science
        </a>
      </div>

      <small>© 2017 ASI Data Science</small>
    </StyledCopyright>
  );
};

export default Copyright;
