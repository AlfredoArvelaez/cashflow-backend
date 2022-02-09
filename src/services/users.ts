import { hash } from 'bcrypt'
import { database } from '../utils/databaseClient'
import { CreateUserDTO } from '../models/CreateUserDto'

const getUser = (id: number) => {
  return database.user.findUnique({
    where: { id },
    include: { transactions: true }
  })
}

const createUser = async (data: CreateUserDTO) => {
  try {
    const { password, ...rest } = data
    const passwordHash = await hash(password, 10)

    const userData: CreateUserDTO = {
      ...rest,
      password: passwordHash
    }

    return database.user.create({ data: userData })
  } catch (err) {
    console.log(err)
  }
}

export const usersService = {
  getUser,
  createUser
}
