export const removeUserFromInvitations = userId => {
  fetch(`/api/apply/invitations/${userId}`, {
    method: 'delete'
  })
    .then(response => response.json())
    .then(responseObj => {
      if (responseObj.error) {
        console.log(responseObj.error)
      }
    })
    .catch(error => console.log(error))
}
