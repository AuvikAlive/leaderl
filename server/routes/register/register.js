const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { registerNewUser } = require('./registerNewUser')
const { authenticateEmailPin } = require('./authenticateEmailPin')
const { updateEmail } = require('./updateEmail')
const { authenticatePhonePin } = require('./authenticatePhonePin')
const { updatePhone } = require('./updatePhone')
const { resendPhonePin } = require('./resendPhonePin')
const { createNewUser } = require('./createNewUser')

router.use(bodyParser.json())

router.post('/', registerNewUser)
router.post('/verifyEmail', authenticateEmailPin)
router.post('/updateEmail', updateEmail)
router.post('/verifyPhone', authenticatePhonePin)
router.post('/updatePhone', updatePhone)
router.post('/resendPhonePin', resendPhonePin)
router.post('/newUser', createNewUser)

module.exports = { router }
