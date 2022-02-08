import database from './'

export const connectToDatabase = async () => {
  try {
    await database.authenticate()
    console.log('Database connection successful')

    return true
  } catch (err) {
    console.log(err)
  }
}
