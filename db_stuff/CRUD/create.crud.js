const createUsersAndPosts = async (db) => {
  const { users } = db.collections
  const userDoc = await users.insert({
    name: `rowadz${Date.now()}`,
    sex: 'male',
    password: 'secret',
    addresses: [
      { country: 'jordan', city: 'Amman', extra_info: 'move me out plz' },
    ],
  })
}

module.exports = {
  createUsersAndPosts,
}
