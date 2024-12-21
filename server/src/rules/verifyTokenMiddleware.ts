import { NextFunction, Request, Response } from 'express'
import JWT, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/user'
dotenv.config()

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY as string

interface DecodedToken extends JwtPayload {
  id: string // acutually userId
}

const tokenDecode = (req: Request): DecodedToken | null => {
  const bearerHeader = req.headers['authorization']
  if (!bearerHeader) return null
  const bearer = bearerHeader.split(' ')[1]

  try {
    // return decoded token
    return JWT.verify(bearer, TOKEN_SECRET_KEY) as DecodedToken
  } catch (error) {
    return null
  }
}

export const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const decodedToken = tokenDecode(req)
  if (!decodedToken) {
    res.status(401).json({ error: 'Not allowed.....' })
    return
  }

  const user = await User.findById(decodedToken.id)
  if (!user) {
    res.status(401).json({ error: 'Not allowed.....' })
    return
  }

  req.user = user
  next()
}
