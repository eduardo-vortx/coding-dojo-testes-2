class PessoaRepository {
  constructor(knex) {
    this.db = knex
  }

  async insert(pessoa) {
    const result = await this.db('pessoas').insert(pessoa)
    console.log(result)
  }
}

module.exports = PessoaRepository
