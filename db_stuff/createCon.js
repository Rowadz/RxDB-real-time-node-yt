const { createRxDatabase, addRxPlugin } = require('rxdb')
const leveldown = require('leveldown')
addRxPlugin(require('pouchdb-adapter-leveldb'))

const init = async () => {
  const db = await createRxDatabase({
    name: 'tutorial', // <- name
    adapter: leveldown,
    password: 'myPassword',
  })
  console.dir(db)
}

module.exports = { init }
