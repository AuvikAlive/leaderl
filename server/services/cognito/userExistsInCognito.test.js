const generatePassword = require('generate-password')
const { createUserInCognito } = require('./createUserInCognito')
const { deleteUserFromCognito } = require('./deleteUserFromCognito')
const { userExistsInCognito } = require('./userExistsInCognito')

test('userExistsInCognito returns false when user does not exist', async () => {
  const userId = 'test@example.com'

  try {
    await expect(userExistsInCognito(userId)).resolves.toBe(false)
  } catch (error) {
    throw error
  }
})

test('userExistsInCognito returns user when user exists', async () => {
  const userId = 'test@example.com'
  const password = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
  })

  try {
    await createUserInCognito(userId, password)
    await expect(userExistsInCognito(userId)).resolves.toBeDefined()
    await deleteUserFromCognito(userId)
  } catch (error) {
    throw error
  }
})
