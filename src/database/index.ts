import { Sequelize } from 'sequelize'
import databaseConfig from './config'

const db = new Sequelize(databaseConfig)

export const connectToDatabase = async (): Promise<void> => {
  try {
    await db.authenticate()
    console.log('Database connected')
  } catch (err) {
    console.log(err)
  }
}
