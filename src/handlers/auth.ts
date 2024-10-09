import { Request, Response } from 'express'
import { registerCtrl, loginCtrl } from '../controllers/auth'

// Handler para manejar el regiter
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await registerCtrl(req.body)
    res.send(result)
  } catch (err: any) {
    if (err.message === 'Usuario registrado') {
      // Código 409 (conflict) para usuarios ya registrados
      res.status(409).send('Usuario ya registrado')
    }
    res.status(500).send('Ocurrió un error inesperado')
  }
}

// Handler para manejar el login
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = await loginCtrl(req.body)
    res
      .cookie('access_token', token,
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60 // 1 hora
        }
      )
      .send({ message: 'Inicio de sesión exitoso' })
  } catch (err: any) {
    res.status(401).send({ message: err.message })
  }
}

export const logout = (_: Request, res: Response): void => {
  try {
    console.log('Cierre de sesión')
    res
      .clearCookie('access_token')
      .status(200)
      .send({ message: 'Cierre de sesión exitoso' })
  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}
