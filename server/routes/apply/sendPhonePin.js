const { getPhonePin } = require('../../services/dynamo/getPhonePin')
const { sendMessage } = require('../../services/sns/sendMessage')

const sendPhonePin = async (phoneNumber, email) => {
  try {
    const pin = await getPhonePin(email)
    const message = `Your verification code is ${pin}`
    return await sendMessage(phoneNumber, message)
  } catch (error) {
    throw error
  }
}

module.exports = { sendPhonePin }
