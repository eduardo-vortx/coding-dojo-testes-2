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
    return await this.db('pessoas').where('id', id).first()
  }

  async deleteById(id) {
    return await this.db('pessoas').where('id', id).delete()
  }

  async update(id, pessoa) {
    return await this.db('pessoas').where('id', id).update(pessoa)
  }
}

module.exports = PessoaRepository
