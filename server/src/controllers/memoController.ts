import { Request, Response } from 'express'
import Memo from '../models/memo'
import { IUser } from '../models/user'

const create = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    res.status(500).json({ error: 'No user found...' })
  }

  try {
    const memoCount = await Memo.find().countDocuments()
    const memo = await Memo.create({
      user: user?._id,
      position: memoCount > 0 ? memoCount : 0,
    })
    res.status(200).json(memo)
  } catch (error) {
    console.error('Error create memo:', error)
    res.status(500).json({ error: 'Failed to Create Memo....' })
  }
}

const getAll = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    res.status(500).json({ error: 'No user found...' })
  }

  try {
    const memos = await Memo.find({ user: user?._id }).sort('-position')
    res.status(200).json(memos)
  } catch (error) {
    console.error('Error get all memos memo:', error)
    res.status(500).json({ error: 'Failed to get all Memos....' })
  }
}

export const memoController = {
  create,
  getAll,
}
