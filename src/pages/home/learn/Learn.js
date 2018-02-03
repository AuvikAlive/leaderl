import React from 'react';
import { Button } from 'carbon-components-react';
import StyledLearn from './StyledLearn';

const Learn = () => (
  <StyledLearn>
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-xs-12 content">
          <div>
            <h4>Interested in becoming a Leaderal ?</h4>
          </div>

          <div>
            <Button>Become a Leaderal</Button>
          </div>
        </div>
      </div>
    </div>
  </StyledLearn>
);

export default Learn;
