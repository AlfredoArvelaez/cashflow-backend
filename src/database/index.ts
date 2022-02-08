import { Sequelize } from 'sequelize'

const databaseConfig: any = {
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

const database = new Sequelize(databaseConfig);
(async () => {
  await database.sync({ alter: true })
})()

export default database
