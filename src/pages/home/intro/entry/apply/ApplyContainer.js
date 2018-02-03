import React from 'react'
import { connect } from 'react-redux'
import { apply } from '../../../../../store/actions/application/application'
import { Apply as ApplyPresentational } from './Apply'

const ApplyContainer = props => <ApplyPresentational {...props} />

const mapStateToProps = state => {
  const { applicationError } = state.user

  return { applicationError }
}

const mapDispatchToProps = { apply }

export const Apply = connect(mapStateToProps, mapDispatchToProps)(
  ApplyContainer
)

export default Apply
