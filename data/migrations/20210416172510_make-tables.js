
exports.up = async function(knex) {
   

  await knex.schema.createTable('projects', table => {
      table.increments('id')
      table.text('name').notNull()
      table.text('description')
      table.boolean('completed').defaultTo(false)
  })
  
  await knex.schema.createTable('resources', table => {
      table.increments('id')
      table.text('name').notNull()
      table.text('description')
  })
  
  await knex.schema.createTable('tasks', table => {
      table.increments('id')
      table.text('description').notNull()
      table.text('notes')
      table.boolean('completed').defaultTo(false)
      table.integer('project_id').references('id').inTable('projects').onDelete('SET NULL').onUpdate('CASCADE')
  })

  await knex.schema.createTable('project_resources', table => {
    table.integer('project_id').references('id').inTable('projects').onDelete('SET NULL').onUpdate('CASCADE')
    table.integer('resource_id').references('id').inTable('resources').onDelete('CASCADE').onUpdate('CASCADE')
    table.primary(['project_id', 'resource_id'])
  })
};

exports.down = async function(knex) {
   
    await knex.schema.dropTableIfExists('project_resources');
    await knex.schema.dropTableIfExists('tasks');
    await knex.schema.dropTableIfExists('resources');
    await knex.schema.dropTableIfExists('projects');
};
