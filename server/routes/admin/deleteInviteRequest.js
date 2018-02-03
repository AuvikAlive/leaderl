const {
  deleteApplicationFromDB
} = require('../../services/dynamo/deleteApplicationFromDB')

const deleteInviteRequest = async (req, res) => {
  const email = req.params.email
  try {
    await deleteApplicationFromDB(email)
    res.send({ success: 'Carry on' })
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { deleteInviteRequest }
