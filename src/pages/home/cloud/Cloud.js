import React from 'react';
import StyledCloud from './StyledCloud';
import Heading from './heading/Heading';
import Tiles from './tiles/Tiles';

const Cloud = () => (
  <StyledCloud>
    <div className="bx--grid">
      <div className="bx--row">
        <Heading />
      </div>

      <div className="bx--row">
        <Tiles />
      </div>
    </div>
  </StyledCloud>
);

export default Cloud;
