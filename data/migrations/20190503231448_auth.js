exports.up = function(knex, Promise) {
    return knex.schema.createTable('auth', function(tbl) {
        tbl
        .increments();
        
        tbl
        .string('username', 255)
        .notNullable()
        
        tbl
        .string('password', 255)
        .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('auth');
};
