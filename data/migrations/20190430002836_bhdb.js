exports.up = function(knex, Promise) {
    return knex.schema.createTable('main', function(tbl) {
        tbl
            .string('entry', 256)  
            .unique()
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('main');
};
