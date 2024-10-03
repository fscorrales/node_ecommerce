import { check } from 'express-validator'
import { validateResult } from '../utils/validate_handle'
import { Request, Response, NextFunction } from 'express'

export const validateCreate = [
  check('username')
    .exists().withMessage('Username is required')
    .not().isEmpty().withMessage('Username cannot be empty'),
  check('email')
    .exists().withMessage('Email is required')
    .isEmail().withMessage('Email must be valid'),
  check('password')
    .exists().withMessage('Password is required')
    .not().isEmpty().withMessage('Password cannot be empty'),
  check('role')
    .exists().withMessage('Role is required')
    .isIn(['seller', 'customer']).withMessage('Role must be either seller or customer'),
  check('image')
    .optional() // optional field
    .isString().withMessage('Image must be a string'),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]
