import { DataTypes } from 'sequelize'
import database from '..'
import { Transaction } from '../Transaction'

const User = database.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  createdAt: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
})

User.hasMany(Transaction)

export { User }
