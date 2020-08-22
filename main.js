const { initDB, createUsersAndPosts, queries } = require('./db_stuff')
require('colors')

const initApp = async () => {
  const db = await initDB()
  setTimeout(() => {
    createUsersAndPosts(db)
    queries(db)
  }, 1000)
  const { users } = db.collections

  // you can also observe single event-types with insert$ update$ remove$
  users.insert$.subscribe((changeEvent) => {
    const { operation, documentId, collectionName } = changeEvent
    console.log(
      `_OPERATION_ [${operation}]`.blue,
      `_DOCUMENT_ID_ [${documentId}]`.cyan,
      `_COLLECTION_NAME_ [${collectionName}]`.gray
    )
  })

  setTimeout(() => {
    createUsersAndPosts(db)
  }, 5000)
  //   users.update$.subscribe((changeEvent) => console.log(changeEvent))
  //   users.remove$.subscribe((changeEvent) => console.log(changeEvent))
}

initApp()
