const {
  updateApplicantData
} = require('../../services/dynamo/updateApplicantData')

const completeApplication = async (req, res) => {
  const { email, birthDay, title, organisation, country, city } = req.body

  try {
    if (
      await updateApplicantData({
        email,
        birthDay,
        title,
        organisation,
        country,
        city
      })
    ) {
      res.send({ success: 'Carry on' })
    }
  } catch (error) {
    console.log(error)
    res.send({ error: 'Sorry, something went wrong, please try again!' })
  }
}

module.exports = { completeApplication }
