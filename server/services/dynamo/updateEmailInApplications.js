const { getApplicantDataFromDB } = require('./getApplicantDataFromDB')
const { deleteApplicationFromDB } = require('./deleteApplicationFromDB')
const { saveApplicationToDB } = require('./saveApplicationToDB')

const updateEmailInApplications = async (oldEmail, newEmail) => {
  let userData = await getApplicantDataFromDB(oldEmail)
  await deleteApplicationFromDB(oldEmail)
  userData.email.S = newEmail
  return saveApplicationToDB({ userData })
}

module.exports = { updateEmailInApplications }
