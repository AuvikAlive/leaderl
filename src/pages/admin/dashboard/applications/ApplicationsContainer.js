import React from 'react'
import { connect } from 'react-redux'
import {
  getApplications,
  deleteApplication,
  sendInvitation
} from '../../../../store/actions/admin/admin'
import { Applications as ApplicationsPresentational } from './Applications'

const ApplicationsContainer = props => <ApplicationsPresentational {...props} />

const mapStateToProps = state => {
  const { applications, applicationsError } = state.admin

  return { applications, applicationsError }
}

const mapDispatchToProps = {
  getApplications,
  deleteApplication,
  sendInvitation
}

export const Applications = connect(mapStateToProps, mapDispatchToProps)(
  ApplicationsContainer
)
