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
    const payload = verify(token, JWT_SECRET) as JwtPayload
    if ((payload.exp ?? 0) > (payload.iat ?? 0)) {
      // Continuar con la siguiente función
      next()
    } else {
      res.status(401).json({ error: 'Token expirado' })
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
      .send('Acceso denegado: Solo el propio usuario tiene permisos o el administrador')
  } else {
    // Si el usuario es admin, permitir que continúe
    next()
  }
}

export { generateToken, verifyToken, authorizeAdmin, authorizeAdminOrSameUser }
