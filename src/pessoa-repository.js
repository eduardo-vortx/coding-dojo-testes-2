class PessoaRepository {
  constructor(knex) {
    this.db = knex
  }

  async insert(pessoa) {
    return await this.db('pessoas')
      .insert(pessoa)
      .then(([id]) => id)
  }

  async getById(id) {
    return await this.db('pessoas')
    .first()
    .where('id', id)
  }
}

module.exports = PessoaRepository
