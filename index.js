
const express = require('express')
const app = express()
const port = 3000

var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : 'db',
    user : 'root',
    password : 'root',
    database : 'app'
  }
});

app.get('/', (req, res) => {
  knex.select().from('pippo').then((data) => {
    res.json(data)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

