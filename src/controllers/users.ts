import { usersService } from 'services'
import { HttpResponseInterface } from '@core/interfaces'
import { NotFoundError } from '@core/errors'
import { NextFunction, Request, Response } from 'express'

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.userId

  try {
    const user = await usersService.getById(userId)

    if (!user) {
      throw new NotFoundError('User')
    }

    const response: HttpResponseInterface = {
      statusCode: 200,
      description: 'User data retrieved successfully',
      data: { user }
    }

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

export const usersControllers = {
  getUser
}
