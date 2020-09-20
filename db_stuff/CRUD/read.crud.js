const queries = async (db) => {
  const { users } = db.collections
  const query = users.find()
  query.$.subscribe(result => {
    console.log(result.length) // the count of the users we have & this will be called when ever the users collection state gets updated
  })
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
