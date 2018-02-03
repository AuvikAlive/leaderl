export const provideFeedback = (component, message) => {
  component.setState({
    validity: message || 'Please fill up all the required fields properly'
  })
  setTimeout(() => component.setState({ validity: '' }), 4000)
}
