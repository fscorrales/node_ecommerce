import { JwtPayload, sign, verify } from 'jsonwebtoken'
import { JWT_SECRET } from '../config/base_config'
import { Request, Response, NextFunction } from 'express'

const generateToken = (id: string, role: string): string => {
  const jwt = sign({ id, role }, JWT_SECRET, {
    expiresIn: '1h' // verificar que la cookie expira en 1 hora
  })
  return jwt
}

// Middleware para verificar el JWT
const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.cookies.access_token
    if (typeof token === 'string' && token !== '') {
      verify(token, JWT_SECRET)
      // Continuar con la siguiente función
      next()
    } else {
      res.status(403).send('Token requerido para la autenticación')
    }
  } catch (error) {
    res.status(401).json({ error: 'Token invalido' })
  }
}

const authorizeAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.access_token
  const user = verify(token, JWT_SECRET) as JwtPayload
  if (user.role !== 'admin') {
    res
      .status(403)
      .send('Acceso denegado: Se requieren privilegios de administrador')
  } else {
    // Si el usuario es admin, permitir que continúe
    next()
  }
}

const authorizeAdminOrSameUser = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.access_token
  const user = verify(token, JWT_SECRET) as JwtPayload
  const { id } = req.params
  if (user.role !== 'admin' && user.id !== id) {
    res
      .status(403)
      .send('Acceso denegado: Se requieren privilegios de administrador')
  } else {
    // Si el usuario es admin, permitir que continúe
    next()
  }
}

export { generateToken, verifyToken, authorizeAdmin, authorizeAdminOrSameUser }
