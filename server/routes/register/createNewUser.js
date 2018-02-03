const generatePassword = require('generate-password')
const {
  getInvitationDataFromDB
} = require('../../services/dynamo/getInvitationDataFromDB')
const {
  createUserInCognito
} = require('../../services/cognito/createUserInCognito')
const {
  deleteInvitationFromDB
} = require('../../services/dynamo/deleteInvitationFromDB')

const createNewUser = async (req, res) => {
  const { userId, email } = req.body
  const invitationCode = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
  })

  try {
    const userData = await getInvitationDataFromDB(userId)
    await createUserInCognito(email, invitationCode, false, userData)
    await deleteInvitationFromDB(email)
    res.send({ success: 'Carry on', invitationCode })
  } catch (error) {
    console.log(error)
    res.send({ error: error.message })
  }
}

module.exports = { createNewUser }
