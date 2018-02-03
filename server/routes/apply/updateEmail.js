const { sendEmailPin } = require('./sendEmailPin')
const {
  updateEmailInApplications
} = require('../../services/dynamo/updateEmailInApplications')

const updateEmail = async (req, res) => {
  const { oldEmail, newEmail } = req.body
  try {
    await updateEmailInApplications(oldEmail, newEmail)
    await sendEmailPin(newEmail)
    res.send({ success: 'Carry on' })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { updateEmail }
