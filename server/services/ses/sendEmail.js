const { ses } = require('./ses')

const sendEmail = (email, message, subject) => {
  const params = {
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: message
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: 'test@wealthion.com'
  }
  const sendPromise = ses.sendEmail(params).promise()

  return sendPromise
    .then(data => {
      console.log(data.MessageId)
    })
    .catch(error => {
      console.log(error, error.stack)
    })
}

module.exports = { sendEmail }
