import React, { Component } from 'react'
import { Button } from 'carbon-components-react'
import { Link } from 'react-router-dom'
import { StyledDashboard } from './StyledDashboard'

export class Dashboard extends Component {
  render() {
    return (
      <StyledDashboard>
        <Link to="/admin/dashboard/applications">
          <Button>
            <span>View Requests for Invitation</span>
          </Button>
        </Link>

        <Link to="/admin/dashboard/invitations">
          <Button>
            <span>View &amp; Generate Invitations</span>
          </Button>
        </Link>
      </StyledDashboard>
    )
  }
}
