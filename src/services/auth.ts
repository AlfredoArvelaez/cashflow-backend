import { compare } from 'bcrypt'
import { CreateUserDTO } from '../core/dtos/CreateUserDto'
import { signToken } from '../utils/jwt'
import { usersService } from './'

// Auth services will be managing the user authentication, authorization and resgistration
const signIn = async (email: string, password: string) => {
  try {
    const fetchedUser = await usersService.getUserByEmail(email)
    if (fetchedUser && await compare(password, fetchedUser.password)) {
      const token = signToken({ userId: fetchedUser.id })

      return token
    }
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
