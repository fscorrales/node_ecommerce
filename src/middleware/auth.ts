// import { Request, Response, NextFunction } from 'express'
// import { JWT_SECRET } from '../../config'
// import jwt from 'jsonwebtoken'

// // Middleware para verificar el JWT
// export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
//   const token = req.cookies.access_token
//   if (token !== null && token !== undefined) {
//     jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decode) => {
//       if (err != null) {
//         res.status(401).json({ error: 'Token invalido' })
//       } else {
//         req.user = decode
//         // Continuar con la siguiente función
//         next()
//       }
//     })
//   } else {
//     res.status(403).send('Token requerido para la autenticación')
//   }
//   // Verifica el token con la clave secreta
// }

// export const authorizeAdmin = (req: Request, res: Response, next: NextFunction): void => {
//   const user = req.user
//   // Aquí asumes que req.user fue previamente asignado
//   // por algún middleware de autenticación, como verifyToken

//   if (!user || user.role !== 'admin') {
//     res
//       .status(403)
//       .send('Acceso denegado: Se requieren privilegios de administrador')
//   } else {
//     // Si el usuario es admin, permitir que continúe
//     next()
//   }
// }
