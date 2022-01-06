class PessoaRepository {
  constructor(knex) {
    this.db = knex
  }

  async insert(pessoa) {
    return await this.db('pessoas')
      .insert(pessoa)
      .then(([id]) => id)
  }
}

module.exports = PessoaRepository
