import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../../components/styledButton/StyledButton'
import StyledUserEntry from './StyledUserEntry'

const UserEntry = () => (
  <StyledUserEntry>
    <Link to="/">Accept invitation</Link>
    <Link to="/">Log in</Link>
    <StyledButton>
      <span>Become a Leaderal</span>
    </StyledButton>
  </StyledUserEntry>
)

export default UserEntry
