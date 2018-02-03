const { getInvitationDataFromDB } = require('./getInvitationDataFromDB')
const { deleteInvitationFromDB } = require('./deleteInvitationFromDB')
const { saveInvitationToDB } = require('./saveInvitationToDB')

const updateEmailInInvitations = async (oldEmail, newEmail) => {
  let userData = await getInvitationDataFromDB(oldEmail)
  await deleteInvitationFromDB(oldEmail)
  userData.userId.S = newEmail
  userData.email.S = newEmail
  return saveInvitationToDB(null, null, userData)
}

module.exports = { updateEmailInInvitations }
