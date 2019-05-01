// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/bhdb.db3'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds/bhdb.db3'
    },
    migrations: {
      directory: './data/migrations'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
