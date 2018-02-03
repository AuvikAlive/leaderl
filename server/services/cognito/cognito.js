const { CognitoIdentityServiceProvider } = require('aws-sdk')
const { region, accessKeyId, secretAccessKey } = require('../../config/aws')

const cognitoidentityserviceprovider = new CognitoIdentityServiceProvider({
  region,
  accessKeyId,
  secretAccessKey
})

module.exports = { cognitoidentityserviceprovider }
