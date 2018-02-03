import { Link } from 'react-router-dom'
import Styled from 'styled-components'

export const StyledLink = Styled(Link)`
  color: ${props => props.theme.support04};
  font-size: 0.875rem;
`
