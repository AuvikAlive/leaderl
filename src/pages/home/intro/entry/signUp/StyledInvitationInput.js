import Styled from 'styled-components'

export const StyledInvitationInput = Styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  a {
    position: absolute;
    top: 0;
    right: 0;
  }

  .bx--tooltip--simple {
    position: absolute;
    top: 0;
    left: 6rem;

    svg {
      fill: ${props => props.theme.support04};
    }
  }
`
