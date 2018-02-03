import styled from 'styled-components'
import { Button } from 'carbon-components-react'

export const StyledButton = styled(Button)`
  color: ${props => props.theme.darkPrimaryBtnText};
  background: ${props => props.theme.support04};

  svg {
    margin-left: 0.5rem;
  }
`
