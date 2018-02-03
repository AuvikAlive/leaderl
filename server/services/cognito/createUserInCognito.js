const { cognitoidentityserviceprovider } = require('./cognito')
const { UserPoolId } = require('../../config/aws')

const createUserInCognito = (email, password, sendMessage, userData) => {
  let params = {
    UserPoolId,
    Username: email,
    DesiredDeliveryMediums: ['EMAIL'],
    TemporaryPassword: password,
    UserAttributes: []
  }

  if (!sendMessage) {
    params.MessageAction = 'SUPPRESS'
  }

  for (const property in userData) {
    switch (property) {
      case 'email':
        params.UserAttributes.push({
          Name: 'email',
          Value: userData[property].S
        })
        break
      case 'phoneNumber':
        params.UserAttributes.push({
          Name: 'phone_number',
          Value: userData[property].S
        })
        break
      case 'firstName':
        params.UserAttributes.push({
          Name: 'given_name',
          Value: userData[property].S
        })
        break
      case 'lastName':
        params.UserAttributes.push({
          Name: 'family_name',
          Value: userData[property].S
        })
        break
      case 'emailVerified':
        params.UserAttributes.push({
          Name: 'email_verified',
          Value: 'true'
        })
        break
      case 'phoneVerified':
        params.UserAttributes.push({
          Name: 'phone_number_verified',
          Value: 'true'
        })
        break
      case 'birthDay':
        params.UserAttributes.push({
          Name: 'birthdate',
          Value: userData[property].S
        })
        break
      case 'organisation':
        params.UserAttributes.push({
          Name: 'custom:organisation',
          Value: userData[property].S
        })
        break
      case 'title':
        params.UserAttributes.push({
          Name: 'custom:title',
          Value: userData[property].S
        })
        break
      case 'country':
        params.UserAttributes.push({
          Name: 'custom:country',
          Value: userData[property].S
        })
        break
      case 'city':
        params.UserAttributes.push({
          Name: 'custom:city',
          Value: userData[property].S
        })
        break
      default:
        break
    }
  }

  return new Promise((resolve, reject) => {
    cognitoidentityserviceprovider.adminCreateUser(params, (error, data) => {
      if (error) {
        console.log(error, error.stack)
        reject(error)
      } else resolve(true)
    })
  })
}

module.exports = { createUserInCognito }
