const db = require('../data/dbConfig.js');

module.exports = {
     insert,
     update,
     remove,
     getAll,
//   findById,
};

function getAll() {
    return db('entry')
  }

function insert(data) {
    return db('entry')
    .insert(data)
}

function update(id, changes){
    return db('entry')
    .where('id', id)
    .update(changes)
}

function remove(id){
    return db('entry')
    .where('id', id)
    .del()
}
