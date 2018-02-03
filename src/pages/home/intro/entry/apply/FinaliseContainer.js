import React from 'react'
import { connect } from 'react-redux'
import { finalise } from '../../../../../store/actions/application/completion'
import { Finalise as FinalisePresentational } from './Finalise'

const FinaliseContainer = props => <FinalisePresentational {...props} />

const mapStateToProps = state => {
  const { email, applicationCompleteError } = state.user

  return { email, applicationCompleteError }
}

const mapDispatchToProps = { finalise }

export const Finalise = connect(mapStateToProps, mapDispatchToProps)(
  FinaliseContainer
)

export default Finalise
