exports.up = function(knex, Promise) {
    return knex.schema.createTable('entry', function(tbl) {
        tbl
        .increments();

        tbl
        .string('entry', 256)  
        .unique()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('entry');
};
