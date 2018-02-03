const {
  getPhonePinFromInvitations
} = require('../../services/dynamo/getPhonePinFromInvitations')
const { sendMessage } = require('../../services/sns/sendMessage')

const sendPhonePin = async (phoneNumber, email) => {
  try {
    const pin = await getPhonePinFromInvitations(email)
    const message = `Your verification code is ${pin}`
    return await sendMessage(phoneNumber, message)
  } catch (error) {
    throw error
  }
}

module.exports = { sendPhonePin }
