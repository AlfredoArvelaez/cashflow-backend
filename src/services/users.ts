import { User } from '@prisma/client'
import { hash } from 'bcrypt'
import { database } from '@core/database'
import { CreateUserDto } from '@core/dtos'
import { EmailAlreadyRegisteredError } from '@core/errors'

const getById = (id: number) => {
  return database.user.findUnique({
    where: { id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      transactions: true
    }
  })
}

const getByEmail = (email: string) => {
  return database.user.findUnique({ where: { email }, include: { transactions: true } })
}

const create = async (data: CreateUserDto) => {
  const userAlreadyExists: User | null = await usersService.getByEmail(data.email)

  if (userAlreadyExists) {
    throw new EmailAlreadyRegisteredError(data.email) // TODO: REFACTOR ERROR
  }

  const { password, ...rest } = data
  const passwordHash = await hash(password, 10)

  const newUserData: CreateUserDto = {
    ...rest,
    password: passwordHash
  }

  return database.user.create(
    {
      data: newUserData,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        transactions: true
      }
    })
}

export const usersService = {
  getById,
  getByEmail,
  create
}
