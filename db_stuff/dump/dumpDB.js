const { writeFile } = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const writeFileAsync = promisify(writeFile)

// https://rxdb.info/rx-database.html#dump
const dumpDB = async (db) => {
  const databaseObj = await db.dump()
  await writeFileAsync(join(__dirname, 'data.json'), JSON.stringify(databaseObj, null, 2)).catch(console.error)
}

// https://rxdb.info/rx-database.html#importdump
const importDump = (db, obj) => {
  db.importDump(obj).then(() => {
    console.log('IMPORTED')
  })
}

module.exports = {
  dumpDB,
}
