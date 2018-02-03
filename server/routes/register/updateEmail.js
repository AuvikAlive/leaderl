const { sendEmailPin } = require('./sendEmailPin')
const {
  updateEmailInInvitations
} = require('../../services/dynamo/updateEmailInInvitations')

const updateEmail = async (req, res) => {
  const { oldEmail, newEmail } = req.body
  try {
    await updateEmailInInvitations(oldEmail, newEmail)
    await sendEmailPin(newEmail)
    res.send({ success: 'Carry on' })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { updateEmail }
