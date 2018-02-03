const {
  saveInvitationToDB
} = require('../../services/dynamo/saveInvitationToDB')
const {
  invitationExistsInDB
} = require('../../services/dynamo/invitationExistsInDB')
const {
  deleteInvitationFromDB
} = require('../../services/dynamo/deleteInvitationFromDB')
const generatePassword = require('generate-password')

test('invitationExistsInDB returns false when invitation does not exist in database', async () => {
  const userId = 'test'

  try {
    await expect(invitationExistsInDB(userId)).resolves.toBe(false)
  } catch (error) {
    throw error
  }
})

test('invitationExistsInDB returns true when invitation exists in database', async () => {
  const userId = 'test@example.com'
  const invitationCode = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
  })

  try {
    await saveInvitationToDB(userId, invitationCode)
    await expect(invitationExistsInDB(userId)).resolves.toBeDefined()
    await deleteInvitationFromDB(userId)
  } catch (error) {
    throw error
  }
})
