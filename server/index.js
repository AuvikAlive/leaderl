const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const compression = require('compression')

app.use(cors())
app.use(compression())

const port = process.env.PORT || 9000

app.use(express.static(path.join(__dirname, '..', 'build')))

app.use('/', require('./routes/phone/phone').router)
app.use('/', require('./routes/signUp/signUp').router)
app.use('/api/apply', require('./routes/apply/apply').router)
app.use('/api/register', require('./routes/register/register').router)
app.use('/api/admin', require('./routes/admin/admin').router)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
