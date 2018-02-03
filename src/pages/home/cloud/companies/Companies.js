import React from 'react';
import StyledCompanies from './StyledCompanies';
import logo from './logo.png';

const Companies = () => (
  <StyledCompanies>
    <div>
      <p className="bx--col-xs-12 bx--col-md-2">Trusted by top companies</p>

      <div className="bx--col-xs-12 bx--col-md-10 bx--col-xxl-6 logos">
        <img src={logo} alt="company logo" />
        <img src={logo} alt="company logo" />
        <img src={logo} alt="company logo" />
        <img src={logo} alt="company logo" />
        <img src={logo} alt="company logo" />
        <img src={logo} alt="company logo" />
      </div>
    </div>
  </StyledCompanies>
);

export default Companies;
