import { CreateUserDTO } from '../models/CreateUserDto'
import { database } from '../utils/databaseClient'

const signUp = async (data: CreateUserDTO) => {
  try {
    const newUser = await database.user.create({ data })
    return newUser
  } catch (err) {
    console.log(err)
  }
}

export const authService = {
  signUp
}
