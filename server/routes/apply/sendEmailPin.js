const { getEmailPin } = require('../../services/dynamo/getEmailPin')
const { sendEmail } = require('../../services/ses/sendEmail')

const sendEmailPin = async email => {
  try {
    const pin = await getEmailPin(email)
    const message = `Your verification code is ${pin}`
    const subject = 'Leaderal email vefication'
    // return await sendEmail(email, message, subject)
  } catch (error) {
    throw error
  }
}

module.exports = { sendEmailPin }
