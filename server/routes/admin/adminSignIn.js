const { accessKeyId, secretAccessKey } = require('../../config/aws')

const adminSignIn = (req, res) => {
  if (req.body.email === accessKeyId && req.body.password === secretAccessKey) {
    res.send({ authenticated: true })
  } else {
    res.send({ authenticated: false })
  }
}

module.exports = { adminSignIn }
