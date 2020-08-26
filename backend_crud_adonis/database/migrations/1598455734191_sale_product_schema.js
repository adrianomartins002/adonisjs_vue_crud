'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleProductSchema extends Schema {
  up () {
    this.create('sale_products', (table) => {
      table.integer('product_id').unsigned().references('id').inTable('products').onUpdate('CASCADE').onDelete('SET NULL')
      table.integer('sales_id').unsigned().references('id').inTable('sales').onUpdate('CASCADE').onDelete('SET NULL')
      table.integer('quantity').notNullable()
      table.decimal('total_price').notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('sale_products')
  }
}

module.exports = SaleProductSchema
