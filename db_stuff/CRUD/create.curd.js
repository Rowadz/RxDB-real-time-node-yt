const createUsersAndPosts = async (db) => {
  const { users } = db.collections
  // console.log(db.collections)
  const userDoc = await users.insert({ name: 'foo', lastname: 'bar' })
}

module.exports = {
  createUsersAndPosts,
}
