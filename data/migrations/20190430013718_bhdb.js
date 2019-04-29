exports.up = function(knex, Promise) {
    return knex.schema.createTable('main', function(tbl) {
        tbl
        .string('entry', 256)  
        .unique()
        .notNullable();
        
        tbl
        .string('username', 255)
        .notNullable()
        .unique();
        
        tbl
        .string('password', 255)
        .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('main');
};
