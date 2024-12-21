import { Request, Response } from 'express'
import User, { IUser } from '../models/user'
import { decryptoPassword, encryptoPassword, issueJwt } from '../utils/auth'

const register = async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } = req.body
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required.' })
    return
  }

  try {
    const encryptedPsw = encryptoPassword(password)
    console.log('encryptedPsw', encryptedPsw)
    const user = await User.create({
      username,
      password: encryptedPsw,
    })

    const token = issueJwt(user._id)

    res.status(201).json({ message: 'User registered successfully.', user, token })
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ error: 'Failed to register user.' })
  }
}

const login = async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } = req.body
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required.' })
    return
  }

  try {
    const user: IUser | null = await User.findOne({ username })
    if (!user) {
      res.status(401).json({ error: 'Username cannot find.....' })
      return
    }

    // handle hushed password
    const decryptedPsw = decryptoPassword(user.password)
    if (decryptedPsw !== password) {
      res.status(401).json({ error: 'Password is not matched.....' })
      return
    }

    const token = issueJwt(user._id)

    res.status(201).json({ message: 'User Loginned successfully.', user, token })
  } catch (error) {
    console.error('Error Login user:', error)
    res.status(500).json({ error: 'Failed to login user.' })
  }
}

export const userController = {
  register,
  login,
}
