const { sendPhonePin } = require('./sendPhonePin')
const {
  updatePhoneNumberInApplications
} = require('../../services/dynamo/updatePhoneNumberInApplications')

const updatePhone = async (req, res) => {
  const { phoneNumber, email } = req.body
  try {
    await updatePhoneNumberInApplications(phoneNumber, email)
    await sendPhonePin(phoneNumber, email)
    res.send({ success: 'Carry on' })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { updatePhone }
