import { Request, Response } from 'express'
import Memo from '../models/memo'
import { IUser } from '../models/user'

const create = async (req: Request, res: Response) => {
  const { user }: { user: IUser; password: string } = req.body
  try {
    const memoCount = await Memo.find().countDocuments()
    const memo = await Memo.create({
      user: user._id,
      position: memoCount > 0 ? memoCount : 0,
    })
    res.status(200).json({ message: 'Memo crated successfully.', memo })
  } catch (error) {
    console.error('Error create memo:', error)
    res.status(500).json({ error: 'Failed to Create Memo....' })
  }
}

export const memoController = {
  create,
}
