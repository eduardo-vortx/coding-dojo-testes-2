const knex = require('knex')
const config = require('../knexfile')

const db = knex(config[process.env.NODE_ENV])

console.log(process.env.NODE_ENV)

;(async () => {
  const result = await db('vacilo').insert({ vacilo: 1, teste: true })
  console.log(result)
})()
