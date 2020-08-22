const { createRxDatabase, addRxPlugin } = require('rxdb')
const leveldown = require('leveldown')
const { userSchema } = require('./schemas')
addRxPlugin(require('pouchdb-adapter-leveldb'))

const initDB = async () => {
  try {
    const db = await createRxDatabase({
      name: 'tutorial', // <- name
      adapter: leveldown,
      password: 'myPassword',
    })

    await db.collection({
      schema: userSchema,
      name: 'users',
    })

    // Use this function to create a json-export from every piece of data in every
    // collection of this database. You can pass true as a parameter to decrypt the
    // encrypted data-fields of your document.

    // db.dump().then(console.log)
    return db
  } catch (error) {
    console.error(error)
  }
}

module.exports = { initDB }
