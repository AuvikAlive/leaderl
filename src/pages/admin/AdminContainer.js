import React from 'react'
import { connect } from 'react-redux'
import { Admin as AdminPresentational } from './Admin'

const AdminContainer = props => <AdminPresentational {...props} />

const mapStateToProps = state => {
  const { authenticated } = state.admin

  return { authenticated }
}

// export const Admin = connect(mapStateToProps)(AdminContainer)
export default connect(mapStateToProps)(AdminContainer)
