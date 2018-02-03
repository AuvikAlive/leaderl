import React from 'react';
import StyledJumbotron from './StyledJumbotron';
import StyledContent from './StyledContent';

const Jumbotron = props => {
  return (
    <StyledJumbotron>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-12 bx--col-md-10 offset-md-1 bx--col-xxl-4 offset-xxl-4">
            <StyledContent>
              <h1>{props.title}</h1>
              {props.body && <p>{props.body}</p>}
            </StyledContent>
          </div>
        </div>
      </div>
    </StyledJumbotron>
  );
};

export default Jumbotron;
