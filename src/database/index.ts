import { Sequelize } from 'sequelize'
import databaseConfig from './config'

const db = new Sequelize(databaseConfig)

export const connectToDatabase = async () => {
  try {
    await db.authenticate()
    console.log('Database connection successful')
  } catch (err) {
    console.log(err)
  }
}
