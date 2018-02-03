const {
  getApplicationsFromDB
} = require('../../services/dynamo/getApplicationsFromDB')

const getApplications = async (req, res) => {
  try {
    const items = await getApplicationsFromDB()
    res.send(items)
  } catch (error) {
    res.send({ error })
  }
}

module.exports = { getApplications }
