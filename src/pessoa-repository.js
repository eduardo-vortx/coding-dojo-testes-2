const config = require('../knexfile')

class PessoaRepository {
  constructor(knex) {
    this.db = knex(config[process.env.NODE_ENV])
  }

  async insert(pessoa) {
    const result  = await db('pessoas').insert(pessoa)
    console.log(result)
  }
}
