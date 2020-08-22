const queries = async (db) => {
  const { users } = db.collections
  const userDoc = await users
    .findOne()
    .where('name')
    .eq('rowadz')
    .exec()
    .then((doc) => console.log(doc.toJSON()))
}

module.exports = {
  queries,
}
