import React from 'react'
import { connect } from 'react-redux'
import {
  getInvitations,
  generateInvitations,
  deleteInvitation
} from '../../../../store/actions/admin/admin'
import { Invitations as InvitationsPresentational } from './Invitations'

const InvitationsContainer = props => <InvitationsPresentational {...props} />

const mapStateToProps = state => {
  const { invitations, invitationsError } = state.admin

  return { invitations, invitationsError }
}

const mapDispatchToProps = {
  getInvitations,
  generateInvitations,
  deleteInvitation
}

export const Invitations = connect(mapStateToProps, mapDispatchToProps)(
  InvitationsContainer
)
