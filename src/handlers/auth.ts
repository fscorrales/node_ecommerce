// import { Request, Response } from 'express'
// import { registerController, loginController } from '../controllers/auth'

// // Handler para manejar el regiter
// export const register = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { username, email, password, role } = req.body
//     const result = await registerController({
//       username,
//       email,
//       password,
//       role
//     })
//     return res.send(result)
//   } catch (err: any) {
//     if (err.message === 'Usuario registrado') {
//       // Código 409 (conflict) para usuarios ya registrados
//       return res.status(409).send('Usuario ya registrado')
//     }
//     return res.status(500).send('Ocurrió un error inesperado')
//   }
// }

// // Handler para manejar el login
// export const login = async (req: Request, res: Response): Promise<Response> => {
//   const { username, password } = req.body

//   try {
//     const token = await loginController({ username, password })
//     res
//       .status(200)
//       .cookie('access_token', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         maxAge: 1000 * 60 * 60
//       })
//       .send({ message: 'Inicio de sesión exitoso' })
//   } catch (err: any) {
//     return res.status(401).send({ message: err.message })
//   }
// }

// export const logout = (_: Request, res: Response): Response => {
//   res
//     .clearCookie('access_token')
//     .status(200)
//     .send({ message: 'Cierre de sesión exitoso' })
// }
