import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import CryptoJS from 'crypto-js'
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY as string
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY as string

export const issueJwt = (userId: unknown): string =>
  JWT.sign({ id: userId }, TOKEN_SECRET_KEY, { expiresIn: '24h' })

export const encryptoPassword = (password: string) =>
  CryptoJS.AES.encrypt(password, SECRET_KEY).toString()

export const decryptoPassword = (password: string) =>
  CryptoJS.AES.decrypt(password, SECRET_KEY).toString(CryptoJS.enc.Utf8)
