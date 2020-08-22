const { initDB, createUsersAndPosts, queries } = require('./db_stuff')

const initApp = async () => {
  const db = await initDB()
  createUsersAndPosts(db)
  queries(db)
}

initApp()
