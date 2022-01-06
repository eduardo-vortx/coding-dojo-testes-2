const PessoaRepository = require('./../src/pessoa-repository')
const knex = require('knex')
const config = require('../knexfile')
const faker = require('faker')
const { expect } = require('chai')

describe('Pessoa Repository', () => {
  const db = knex(config[process.env.NODE_ENV])
  const repository = new PessoaRepository(db)

  before(async () => {
    await db.migrate.latest()
  })

  it('deve incluir a pessoa', async () => {
    const pessoa = {
      email: faker.internet.email(),
      genero: faker.helpers.randomize(['M', 'F']),
      nomeCompleto: faker.name.firstName(),
      celular: faker.phone.phoneNumber(),
    }

    const id = await repository.insert(pessoa)

    const [pessoaIncluida] = await db('pessoas').select().where('id', id)

    expect(pessoaIncluida).to.be.eqls({ ...pessoa, id })
  })
})
