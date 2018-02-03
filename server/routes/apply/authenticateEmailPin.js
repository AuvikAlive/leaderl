const { getEmailPin } = require('../../services/dynamo/getEmailPin')
const {
  updateEmailVerification
} = require('../../services/dynamo/updateEmailVerification')

const authenticateEmailPin = async (req, res) => {
  const { email, code } = req.body
  try {
    const pin = await getEmailPin(email)
    if (pin === code) {
      updateEmailVerification(email)
      res.send({ authenticated: true })
    } else res.send({ authenticated: false })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { authenticateEmailPin }
