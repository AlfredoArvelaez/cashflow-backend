import { compare } from 'bcrypt'
import { CreateUserDTO } from '../core/dtos/CreateUserDto'
import { usersService } from './'

// Auth services will be managing the user authentication, authorization and resgistration
const signIn = async (email: string, password: string) => {
  try {
    const fetchedUser = await usersService.getUserByEmail(email)

    if (fetchedUser && await compare(password, fetchedUser.password)) { return fetchedUser }

    return null
  } catch (err) {
    console.log(err)
  }
}

const signUp = (data: CreateUserDTO) => {
  // Create user
  return usersService.createUser(data)

  // TODO handle the authentication and return jwt
}

export const authService = {
  signIn,
  signUp
}
