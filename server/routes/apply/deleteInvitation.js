const {
  deleteInvitationFromDB
} = require('../../services/dynamo/deleteInvitationFromDB')

const deleteInvitation = async (req, res) => {
  const userId = req.params.userId

  try {
    await deleteInvitationFromDB(userId)
    res.send({ success: 'Carry on' })
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { deleteInvitation }
