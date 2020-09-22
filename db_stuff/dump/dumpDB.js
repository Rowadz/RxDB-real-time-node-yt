const { writeFileSync } = require('fs')

// https://rxdb.info/rx-database.html#dump
const dumpDB = async (db) => {
  db.dump().then((data) => {
    writeFileSync('./data.json', JSON.stringify(data, null, 2))
  })
}

// https://rxdb.info/rx-database.html#importdump
const importDump = (db, json) => {
  emptyDatabase.importDump(json).then(() => {
    console.log('DONE')
  })
}


module.exports = {
    dumpDB,
  }
  