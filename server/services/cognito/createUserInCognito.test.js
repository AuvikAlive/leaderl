const generatePassword = require('generate-password')
const { createUserInCognito } = require('./createUserInCognito')
const { deleteUserFromCognito } = require('./deleteUserFromCognito')

test('createUserInCognito creates user in cognito', async () => {
  const email = 'auvik1@yahoo.com'
  const password = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
  })

  try {
    await expect(createUserInCognito(email, password, false)).resolves.toBe(
      true
    )
    await deleteUserFromCognito(email)
  } catch (error) {
    throw error
  }
})
