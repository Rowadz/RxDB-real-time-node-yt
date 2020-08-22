const createUsersAndPosts = async (db) => {
  const { users } = db.collections
  // console.log(db.collections)
  const userDoc = await users.insert({
    name: 'rowad',
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
