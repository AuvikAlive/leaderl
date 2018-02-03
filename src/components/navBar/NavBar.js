import React from 'react';
import StyledNavBar from './StyledNavBar';
import Desktop from './desktop/Desktop';
import UserEntry from '../userEntry/UserEntry';
import Mobile from './mobile/Mobile';

class NavBar extends React.Component {
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <StyledNavBar>
        <Desktop isOpen={this.state.isOpen} onClick={this.toggleModal} />

        <UserEntry />

        <Mobile onClick={this.toggleModal} />
      </StyledNavBar>
    );
  }
}

export default NavBar;
