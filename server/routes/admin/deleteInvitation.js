const {
  deleteInvitationFromDB
} = require('../../services/dynamo/deleteInvitationFromDB')
const {
  deleteUserFromCognito
} = require('../../services/cognito/deleteUserFromCognito')

const deleteInvitation = async (req, res) => {
  const { userId, bulk } = req.body

  try {
    await deleteInvitationFromDB(userId)
    if (!!bulk) {
      return res.send({ success: 'Carry on' })
    }
    await deleteUserFromCognito(userId)
    res.send({ success: 'Carry on' })
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { deleteInvitation }
