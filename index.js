const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const get = require('./src/routes/get')
const put = require('./src/routes/put')
const del = require('./src/routes/delete')
const pos = require('./src/routes/post')

app.use(cors())
app.use(bodyParser.json())
app.use(get.get)
app.use(put.putID)
app.use(del.deleteID)
app.use(pos.postID)

app.listen(port, () => {
    console.log(`Server NodeJS rodando no endereço http://localhost:${port}`)
})