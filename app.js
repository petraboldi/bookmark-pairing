const express = require('express')
const app = express()
const port = 3000
const db = require('./queries.js')

app.use(express.urlencoded({ extended: false }))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('./index')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})