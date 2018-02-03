const { sendPhonePin } = require('./sendPhonePin')

const resendPhonePin = async (req, res) => {
  const { phoneNumber, email } = req.body
  try {
    await sendPhonePin(phoneNumber, email)
    res.send({ success: 'Carry on' })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { resendPhonePin }
