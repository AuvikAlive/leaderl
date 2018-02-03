const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { saveUserApplication } = require('./saveUserApplication')
const { authenticateEmailPin } = require('./authenticateEmailPin')
const { updateEmail } = require('./updateEmail')
const { authenticatePhonePin } = require('./authenticatePhonePin')
const { updatePhone } = require('./updatePhone')
const { resendPhonePin } = require('./resendPhonePin')
const { completeApplication } = require('./completeApplication')
const { deleteInvitation } = require('./deleteInvitation')

router.use(bodyParser.json())

router.post('/', saveUserApplication)
router.post('/verifyEmail', authenticateEmailPin)
router.post('/updateEmail', updateEmail)
router.post('/verifyPhone', authenticatePhonePin)
router.post('/updatePhone', updatePhone)
router.post('/resendPhonePin', resendPhonePin)
router.post('/finalise', completeApplication)
router.delete('/invitations/:userId', deleteInvitation)

module.exports = { router }
