'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.string('name', 45).notNullable()
      table.integer('stock_balance').notNullable()
      table.integer('image_id').unsigned().references('id').inTable('images').onUpdate('CASCADE').onDelete('SET NULL')
      table.integer('categorie_id').unsigned().references('id').inTable('categories').onUpdate('CASCADE').onDelete('SET NULL')
      table.decimal('price').notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
