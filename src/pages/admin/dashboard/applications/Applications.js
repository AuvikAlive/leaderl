import React, { Component } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  Button
} from 'carbon-components-react'
import { StyledApplications } from './StyledApplications'

export class Applications extends Component {
  state = {}

  componentWillMount() {
    this.props.getApplications()
  }

  render() {
    const {
      applications,
      deleteApplication,
      sendInvitation,
      applicationsError
    } = this.props
    return (
      <StyledApplications>
        <h4>Requests for Invitation</h4>
        <Table>
          <TableHead>
            <TableRow header>
              <TableHeader>First Name</TableHeader>
              <TableHeader>Last Name</TableHeader>
              <TableHeader>Email Address</TableHeader>
              <TableHeader>Mobile Number</TableHeader>
              <TableHeader>Email Verified</TableHeader>
              <TableHeader>Mobile Verified</TableHeader>
              <TableHeader>Date of Birth</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Organisation</TableHeader>
              <TableHeader>Country</TableHeader>
              <TableHeader>City</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map(value => (
              <TableRow key={value.email.S}>
                <TableData>{value.firstName.S}</TableData>
                <TableData>{value.lastName.S}</TableData>
                <TableData>{value.email.S}</TableData>
                <TableData>{value.phoneNumber.S}</TableData>
                <TableData>{value.emailVerified ? 'Yes' : 'No'}</TableData>
                <TableData>{value.phoneVerified ? 'Yes' : 'No'}</TableData>
                <TableData>{value.birthDay ? value.birthDay.S : ''}</TableData>
                <TableData>{value.title ? value.title.S : ''}</TableData>
                <TableData>
                  {value.organisation ? value.organisation.S : ''}
                </TableData>
                <TableData>{value.country ? value.country.S : ''}</TableData>
                <TableData>{value.city ? value.city.S : ''}</TableData>
                <TableData>
                  <Button onClick={() => sendInvitation(value)}>
                    <span>Send Invitation</span>
                  </Button>
                  <Button
                    kind="danger"
                    onClick={() => deleteApplication(value.email.S)}
                  >
                    <span>Remove Request</span>
                  </Button>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>{applicationsError}</div>
      </StyledApplications>
    )
  }
}
