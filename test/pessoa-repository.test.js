const PessoaRepository = require('./../src/pessoa-repository')
const knex = require('knex')
const config = require('../knexfile')
const faker = require('faker')
const { assert, expect } = require('chai')

describe('Pessoa Repository', () => {
  const db = knex(config[process.env.NODE_ENV])
  const repository = new PessoaRepository(db)

  before(async () => {
    await db.migrate.latest()
  })

  it('deve incluir a pessoa', () => {
    const pessoa = {
      email: faker.internet.email(),
      genero: faker.helpers.randomize(['M', 'F']),
      nomeCompleto: faker.name.firstName(),
      celular: faker.phone.phoneNumber()
    }

    const a = await repository.insert(pessoa)

    expect(true).to.be.true
  })
})
