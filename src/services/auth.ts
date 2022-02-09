import { CreateUserDTO } from '../models/CreateUserDto'
import { usersService } from './'

// Auth services will be managing the user authentication, authorization and resgistration

const signUp = (data: CreateUserDTO) => {
  // Create user
  return usersService.createUser(data)

  // TODO handle the authentication and return jwt
}

export const authService = {
  signUp
}
