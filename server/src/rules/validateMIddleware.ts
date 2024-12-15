import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

// バリデーション結果をチェックし、エラーがあればレスポンスを返すミドルウェア
export const validateMIddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
    return
  }
  next()
}
