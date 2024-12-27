import mongoose, { Document, Model, Schema } from 'mongoose'
import { IUser } from './user'

export interface IMemo extends Document {
  user: IUser
  icon: string
  title: string
  description: string
  position: number
  favorite: boolean
}

const memoSchema: Schema<IMemo> = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  icon: {
    type: String,
    default: '📝',
  },
  title: {
    type: String,
    default: 'Default memo',
  },
  description: {
    type: String,
    default: 'Write your memo',
  },
  position: {
    type: Number,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

const Memo: Model<IMemo> = mongoose.model<IMemo>('Memo', memoSchema)
export default Memo
