exports.up = async function (knex) {
  return knex.schema.createTable('pessoas', (table) => {
    table.increments('id')
    table.string('email', 100).notNullable()
    table.string('genero', 1).notNullable()
    table.string('nomeCompleto', 150).notNullable()
    table.string('celular', 20)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('pessoas')
}
