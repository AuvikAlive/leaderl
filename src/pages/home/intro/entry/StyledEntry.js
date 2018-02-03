import Styled from 'styled-components'

export const StyledEntry = Styled.div`
  margin-bottom: 2rem;
  box-sizing: border-box;

  .content {
    background: ${props => props.theme.text01};
    box-sizing: border-box;
    /* padding: 1rem; */
    padding: 24px;
    &:before,
    &:after {
      content: "";
      display: table;
    } 
    &:after {
      clear: both;
    }
  }

  h4 {
    margin-bottom: 24px;
  }

  .first-sign-in-validity {
    margin: 24px 0;
  }

  .pre-input {
    font-size: 0.875rem;
  }

  .post-input {
    font-size: 12px;
    margin: 24px 0;
    a {
      font-size: 12px;
    }
  }

  input {
    color: white;
  }

  .inputs {
    display: flex;
    flex-wrap: wrap;
    margin: 24px 0;

    div {
      margin-top: 0;
      margin-bottom: 0;
    }

    > div:first-child {
      /* margin-right: 1rem; */
      margin-right: 16px;
    }

    .bx--text-input {
      min-width: 100%;
    }
  }

  .bx--date-picker-container {
    width: 100%;
  }

  .bx--date-picker__input {
      min-width: 100%;
    }

  .bx--form-item {
    /* margin-top: 1.5rem; */
    margin-top: 24px;
    margin-right: 0;
  }

  input {
    background: ${props => props.theme.inputBackground};
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin: 24px 0;
  }

  .button-container-thank-you {
    justify-content: center;
  }

  .loader {
    display: flex;
    justify-content: center;
  }

  button {
    /* margin-top: 1.5rem; */
    /* float: right; */
  }
`
