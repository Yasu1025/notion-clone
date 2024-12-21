import JWT from 'jsonwebtoken'
import { Request, Response } from 'express'
import User from '../models/user'

const SECRET_KEY = process.env.SECRET_KEY as string
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY as string

const register = async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } = req.body
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required.' })
    return
  }

  try {
    const encryptedPsw = CryptoJS.AES.encrypt(password, SECRET_KEY).toString()
    const user = await User.create({
      username,
      password: encryptedPsw,
    })

    // Issue JWT
    const token = JWT.sign({ id: user._id }, TOKEN_SECRET_KEY, { expiresIn: '24h' })

    res.status(200).json({ message: 'User registered successfully.', user, token })
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ error: 'Failed to register user.' })
  }
}

export const userController = {
  register,
}
