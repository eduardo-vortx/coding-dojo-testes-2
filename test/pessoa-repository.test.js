const PessoaRepository = require('./../src/pessoa-repository')
const knex = require('knex')
const config = require('../knexfile')

describe('Pessoa Repository', () => {
  const db = knex(config[process.env.NODE_ENV])
  const repository = new PessoaRepository(db)

  before(async () => {
    await db.migrate.latest()
  })

  it('deve incluir a pessoa', () => {
    const pessoa = {
      email: 
    }

    await repository.insert(pessoa)
  })
})
