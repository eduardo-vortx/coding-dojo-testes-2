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

  const gerarPessoaAleatoria = () => ({
    email: faker.internet.email(),
    genero: faker.helpers.randomize(['M', 'F']),
    nomeCompleto: faker.name.firstName(),
    celular: faker.phone.phoneNumber(),
  })

  it('deve incluir a pessoa', async () => {
    const pessoa = gerarPessoaAleatoria()

    const id = await repository.insert(pessoa)

    const [pessoaIncluida] = await db('pessoas').select().where('id', id)

    expect(pessoaIncluida).to.be.eqls({ ...pessoa, id })
  })

  it('deve buscar por id uma pessoa inserida', async () => {
    const pessoa = gerarPessoaAleatoria()

    const id = await db('pessoas')
      .insert(pessoa)
      .then(([id]) => id)

    const pessoaInserida = await repository.getById(id)

    expect(pessoaInserida).to.be.eqls({ id, ...pessoa })
  })

  it('deve deletar por id uma pessoa inserida', async () => {

    const pessoa = gerarPessoaAleatoria()
    
    const id = await db('pessoas')
    .insert(pessoa)
    .then(([id]) => id)

    await repository.deleteById(id)

    const [pessoaDeletada] = await db('pessoas')
    .select()
    .where('id', id)

    expect(pessoaDeletada).to.be.eqls({ id, ...pessoa })
  })
})
