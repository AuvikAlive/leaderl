const {
  updateEmailVerification
} = require('../../services/DB/updateEmailVerification')

test('updateEmailVerification updates application email verfication info', async () => {
  const email = 'auvik1@yahoo.com'

  try {
    await expect(updateEmailVerification(email)).resolves.toBe(true)
  } catch (error) {
    throw error
  }
})
