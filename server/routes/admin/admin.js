const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { getApplications } = require('./getApplications')
const { getInvitations } = require('./getInvitations')
const { deleteInviteRequest } = require('./deleteInviteRequest')
const { deleteInvitation } = require('./deleteInvitation')
const { sendInvitation } = require('./sendInvitation')
const { generateBulkInvitations } = require('./generateBulkInvitations')
const { adminSignIn } = require('./adminSignIn')

router.use(bodyParser.json())

router.get('/applications', getApplications)
router.get('/invitations', getInvitations)
router.delete('/applications/:email', deleteInviteRequest)
router.delete('/invitations/:userId', deleteInvitation)
router.post('/invite', sendInvitation)
router.post('/bulkInvite', generateBulkInvitations)
router.post('/signin', adminSignIn)

module.exports = { router }
