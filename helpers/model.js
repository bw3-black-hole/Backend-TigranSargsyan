const db = require('../data/dbConfig.js');

module.exports = {
     insert,
     update,
     remove,
     getAll,
//   findById,
};

function getAll() {
    return db('main')
  }

function insert(data) {
    return db('main')
    .where('id', id)
    .insert(data)
}

function update(id, changes){
    return db('main')
    .where('id', id)
    .update(changes)
}

function remove(id){
    return db('main')
    .where('id', id)
    .del()
}
