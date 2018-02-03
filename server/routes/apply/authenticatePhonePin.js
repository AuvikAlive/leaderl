const { getPhonePin } = require('../../services/dynamo/getPhonePin')
const {
  updatePhoneVerification
} = require('../../services/dynamo/updatePhoneVerification')

const authenticatePhonePin = async (req, res) => {
  const { email, code } = req.body
  try {
    const pin = await getPhonePin(email)
    if (pin === code) {
      updatePhoneVerification(email)
      res.send({ authenticated: true })
    } else res.send({ authenticated: false })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { authenticatePhonePin }
