const { cognitoidentityserviceprovider } = require('./cognito')
const { UserPoolId } = require('../../config/aws')

const deleteUserFromCognito = userId => {
  var params = {
    UserPoolId,
    Username: userId
  }

  return new Promise((resolve, reject) => {
    cognitoidentityserviceprovider.adminDeleteUser(params, (error, data) => {
      if (error) {
        console.log(error, error.stack)
        reject(error)
      } else resolve(true)
    })
  })
}

module.exports = { deleteUserFromCognito }
