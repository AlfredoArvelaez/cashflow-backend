import { CreateUserDTO } from '../models/CreateUserDto'
import { database } from '../utils/databaseClient'

const signUp = async (data: CreateUserDTO) => {
  try {
    return await database.user.create({ data })
  } catch (err) {
    console.log(err)
  }
}

export const authService = {
  signUp
}
