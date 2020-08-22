const { initDB, createUsersAndPosts } = require('./db_stuff')

const initApp = async () => {
  const db = await initDB()
  createUsersAndPosts(db)
}

initApp()
