const uuidv4 = require('uuid/v4')
const generatePassword = require('generate-password')
const {
  saveInvitationToDB
} = require('../../services/dynamo/saveInvitationToDB')

const generateBulkInvitations = (req, res) => {
  const inviteCount = parseInt(req.body.inviteCount, 10)
  let invitations = []
  for (let i = 0; i < inviteCount; i++) {
    const userId = uuidv4()
    const invitationCode = generatePassword.generate({
      length: 8,
      numbers: true,
      symbols: true,
      uppercase: true,
      strict: true
    })
    invitations[i] = saveInvitationToDB(userId, invitationCode)
  }

  Promise.all(invitations)
    .then(values => {
      res.send({ success: 'Carry on' })
    })
    .catch(error => res.send({ error }))
}

module.exports = { generateBulkInvitations }
