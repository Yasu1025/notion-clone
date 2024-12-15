import mongoose from 'mongoose'

export const connectToMongoDB = async () => {
  const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL || ''
  try {
    await mongoose.connect(CONNECTION_URL)
    console.log('Success Connection to MongoDB')
  } catch (error) {
    console.log('Failed to connect to MongoDB....')
  }
}
