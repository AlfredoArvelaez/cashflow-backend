import { User } from '@prisma/client'
import { compare } from 'bcrypt'
import { signToken } from 'utils/jwt'
import { CreateUserDto } from '@core/dtos'
import { InvalidCredentialsError } from '@core/errors'
import { usersService } from './'

// Auth services will be managing the user authentication, authorization and resgistration
const signIn = async (email: string, password: string) => {
  const fetchedUser: User | null = await usersService.getByEmail(email)

  if (!fetchedUser || !await compare(password, fetchedUser.password)) {
    throw new InvalidCredentialsError()
  }

  const token = signToken({ userId: fetchedUser.id })

  return token
}

const signUp = async ({ firstName, lastName, email, password }: CreateUserDto) => {
  const newUserData = await usersService.create({ firstName, lastName, email, password })
  const token = signToken({ userId: newUserData?.id })

  return { user: newUserData, token }
}

export const authService = {
  signIn,
  signUp
}
