const securePin = require('secure-pin')
const {
  userExistsInCognito
} = require('../../services/cognito/userExistsInCognito')
const {
  invitationExistsInDB
} = require('../../services/dynamo/invitationExistsInDB')
const {
  getInvitationDataFromDB
} = require('../../services/dynamo/getInvitationDataFromDB')
const {
  deleteInvitationFromDB
} = require('../../services/dynamo/deleteInvitationFromDB')
const {
  saveInvitationToDB
} = require('../../services/dynamo/saveInvitationToDB')
const { sendPhonePin } = require('./sendPhonePin')

const registerNewUser = async (req, res) => {
  const { userId, email, phoneNumber, firstName, lastName } = req.body

  try {
    if (await userExistsInCognito(email)) {
      res.send({ error: 'Sorry, user with this email already exists!' })
    } else if (await invitationExistsInDB(email)) {
      res.send({ error: 'Sorry, user with this email is already invited!' })
    } else {
      const userData = await getInvitationDataFromDB(userId)
      await deleteInvitationFromDB(userId)
      userData.userId = { S: email }
      userData.email = { S: email }
      userData.phoneNumber = { S: phoneNumber }
      userData.firstName = { S: firstName }
      userData.lastName = { S: lastName }
      userData.emailPin = { S: securePin.generatePinSync(6) }
      userData.phonePin = { S: securePin.generatePinSync(6) }
      await saveInvitationToDB(null, null, userData)
      await sendPhonePin(phoneNumber, email)
      res.send({ success: 'Carry on' })
    }
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { registerNewUser }
