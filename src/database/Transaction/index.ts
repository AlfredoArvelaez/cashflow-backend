import { DataTypes } from 'sequelize'
import database from '..'
import { User } from '../User'

enum TransactionTypes { // eslint-disable-line
  INCOMES = 'INCOMES', // eslint-disable-line
  EXPENSES = 'EXPENSES' // eslint-disable-line
}

const Transaction = database.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  type: {
    type: DataTypes.ENUM({
      values: [TransactionTypes.INCOMES, TransactionTypes.EXPENSES]
    })
  }
})

Transaction.belongsTo(User)

export { Transaction }
