const {
  applicationExistsInDB
} = require('../../services/dynamo/applicationExistsInDB')
const {
  invitationExistsInDB
} = require('../../services/dynamo/invitationExistsInDB')
const {
  userExistsInCognito
} = require('../../services/cognito/userExistsInCognito')
const {
  saveApplicationToDB
} = require('../../services/dynamo/saveApplicationToDB')
const { sendPhonePin } = require('./sendPhonePin')

const saveUserApplication = async (req, res) => {
  const { email, phoneNumber, firstName, lastName } = req.body

  try {
    if (await applicationExistsInDB(email)) {
      res.send({
        error:
          'Sorry, invite request with this email already exists, please wait for invitation code!'
      })
    } else if (await invitationExistsInDB(email)) {
      res.send({ error: 'Sorry, user with this email is already invited!' })
    } else if (await userExistsInCognito(email)) {
      res.send({ error: 'Sorry, user with this email already exists!' })
    } else {
      await saveApplicationToDB({ email, phoneNumber, firstName, lastName })
      await sendPhonePin(phoneNumber, email)
      res.send({ success: 'Carry on' })
    }
  } catch (error) {
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { saveUserApplication }
