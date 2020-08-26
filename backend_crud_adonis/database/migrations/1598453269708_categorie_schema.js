'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorieSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.string('name')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorieSchema
