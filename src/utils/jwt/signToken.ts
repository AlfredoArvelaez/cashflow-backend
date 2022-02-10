import jwt from 'jsonwebtoken'

export const signToken = (payload: any): string => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET as string)

  return token
}
