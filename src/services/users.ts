import { database } from '../utils/databaseClient'
import { CreateUserDTO } from '../models/CreateUserDto'

const getUser = (id: number) => {
  return database.user.findUnique({
    where: { id },
    include: { transactions: true }
  })
}

const createUser = (data: CreateUserDTO) => {
  return database.user.create({ data })
}

export const usersService = {
  getUser,
  createUser
}
