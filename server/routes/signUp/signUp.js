const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const {
  invitationExistsInDB
} = require('../../services/dynamo/invitationExistsInDB')

router.use(bodyParser.json())

router.post('/api/signup/invitation', (req, res) => {
  sendInvitationInfo(req, res)
})

const sendInvitationInfo = async (req, res) => {
  const { userId, invitationCode } = req.body

  try {
    const userData = await invitationExistsInDB(userId)
    if (userData) {
      if (userData.invitationCode.S === invitationCode) {
        res.send({ authenticated: true, userData })
      } else res.send({ authenticated: false })
    } else res.send({ authenticated: false })
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { router }
