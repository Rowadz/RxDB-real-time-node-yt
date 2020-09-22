const shortid = require('shortid')

const createUsersAndPosts = async (db) => {
  const { users } = db.collections
  const userDoc = await users.insert({
    name: `rowadz` + Date.now(),
    sex: 'male',
    password: 'secret',
    addresses: [
      { country: 'jordan', city: 'Amman', extra_info: 'move me out plz' },
    ],
    posts: [
      { id: shortid.generate(), title: 'nice 1', body: 'cool 1' },
      { id: shortid.generate(), title: 'nice 2', body: 'cool 2' },
    ],
  })
}

module.exports = {
  createUsersAndPosts,
}
