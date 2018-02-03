const generatePassword = require('generate-password')
const {
  invitationExistsInDB
} = require('../../services/dynamo/invitationExistsInDB')
const {
  getApplicantDataFromDB
} = require('../../services/dynamo/getApplicantDataFromDB')
const {
  saveInvitationToDB
} = require('../../services/dynamo/saveInvitationToDB')
const {
  deleteApplicationFromDB
} = require('../../services/dynamo/deleteApplicationFromDB')
const {
  createUserInCognito
} = require('../../services/cognito/createUserInCognito')

const sendInvitation = async (req, res) => {
  const { email } = req.body

  const invitationCode = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
  })

  try {
    const userId = email
    if (await invitationExistsInDB(userId)) {
      res.send({ error: 'User already invited!' })
    } else {
      const userData = await getApplicantDataFromDB(email)
      await saveInvitationToDB(userId, invitationCode, userData)
      await deleteApplicationFromDB(email)
      await createUserInCognito(userId, invitationCode, true, userData)
      res.send({ success: 'Carry on' })
    }
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { sendInvitation }
