const express = require('express')
const { Client } = require('pg')
const app = express()
const port = 3000

const client = new Client({
  user: 'root',
  // host: 'postgres', Nome do container Postgress
  // host: 'postgres', Ou com componse nome do serviço
  host: "db",
  database: 'root',
  password: 'root',
  port: 5432,
})

client.connect()

const SQL = () => client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)

  client.end()
})

app.get('/', (req, res) => {

  SQL()

  res.json({ presentation: 'Hello Word' })
})

app.listen(port, () => {
  console.log(`Start server port ${port} and bind machine !`)
})