import React, { Component } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  Button,
  TextInput
} from 'carbon-components-react'
import { StyledInvitations } from './StyledInvitations'

export class Invitations extends Component {
  state = {
    inviteCount: 0
  }

  componentWillMount() {
    this.props.getInvitations()
  }

  onInviteInput = event => {
    const inviteCount = event.target.value
    this.setState({ inviteCount })
  }

  render() {
    const {
      generateInvitations,
      invitations,
      deleteInvitation,
      invitationsError
    } = this.props

    const { inviteCount } = this.state

    return (
      <StyledInvitations>
        <div className="generate-invites">
          <TextInput
            type="number"
            id="invite-count"
            name="inviteCount"
            labelText="Number of Invitations"
            placeholder="Number of Invitations"
            onChange={this.onInviteInput}
            value={inviteCount}
          />
          <Button onClick={() => generateInvitations(inviteCount)}>
            <span>Generate Invitations</span>
          </Button>
        </div>
        <h4>Sent Invitations</h4>
        <Table>
          <TableHead>
            <TableRow header>
              <TableHeader>User Id</TableHeader>
              <TableHeader>Invitation Code</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {invitations.map(value => (
              <TableRow key={value.userId.S}>
                <TableData>{value.userId.S}</TableData>
                <TableData>{value.invitationCode.S}</TableData>
                <TableData>
                  <Button
                    kind="danger"
                    onClick={() =>
                      deleteInvitation(value.userId.S, !!value.bulk)
                    }
                  >
                    <span>Remove Invitation</span>
                  </Button>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>{invitationsError}</div>
      </StyledInvitations>
    )
  }
}
