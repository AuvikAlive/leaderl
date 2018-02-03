const { sns } = require('./sns')

const sendMessage = (PhoneNumber, Message) => {
  const params = {
    MessageStructure: 'string',
    PhoneNumber,
    Message
  }

  return new Promise((resolve, reject) => {
    sns.publish(params, (error, data) => {
      if (error) {
        console.log(error, error.stack)
        reject(error)
      } else resolve(true)
    })
  })
}

module.exports = { sendMessage }
