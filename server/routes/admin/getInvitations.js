const {
  getInvitationsFromDB
} = require('../../services/dynamo/getInvitationsFromDB')

const getInvitations = async (req, res) => {
  try {
    const items = await getInvitationsFromDB()
    res.send(items)
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { getInvitations }
