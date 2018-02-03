const { sendMessage } = require('./sendMessage')

test('sendMessage sends sms to the given number', async () => {
  const phoneNumber = '+8801796589423'
  const message = 'something'

  try {
    await expect(sendMessage(phoneNumber, message)).resolves.toBe(true)
  } catch (error) {
    throw error
  }
})

// test('sendMessage throws error if number is invlaid', async () => {
//   const phoneNumber = '12345678'
//   const message = 'something'

//   try {
//     await expect(sendMessage(phoneNumber, message)).resolves.toBe(true)
//   } catch (error) {
//     throw error
//   }
// })
