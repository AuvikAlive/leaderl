const {
  getPhonePinFromInvitations
} = require('../../services/dynamo/getPhonePinFromInvitations')
const {
  updatePhoneVerificationInInvitations
} = require('../../services/dynamo/updatePhoneVerificationInInvitations')

const authenticatePhonePin = async (req, res) => {
  const { code, email } = req.body
  try {
    const pin = await getPhonePinFromInvitations(email)
    if (pin === code) {
      updatePhoneVerificationInInvitations(email)
      res.send({ authenticated: true })
    } else res.send({ authenticated: false })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { authenticatePhonePin }
