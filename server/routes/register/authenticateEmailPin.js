const {
  getEmailPinFromInvitations
} = require('../../services/dynamo/getEmailPinFromInvitations')
const {
  updateEmailVerificationInInvitations
} = require('../../services/dynamo/updateEmailVerificationInInvitations')

const authenticateEmailPin = async (req, res) => {
  const { userId, code } = req.body
  try {
    const pin = await getEmailPinFromInvitations(userId)
    if (pin === code) {
      updateEmailVerificationInInvitations(userId)
      res.send({ authenticated: true })
    } else res.send({ authenticated: false })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { authenticateEmailPin }
