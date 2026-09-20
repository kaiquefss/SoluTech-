import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import userService from '../services/userService.js'

const authController = {
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const userExists = await userService.RetrieveUserEmail(email)

            if(!userExists || userExists.length === 0){
                return res.status(400).json({
                    message: "UTILIZADOR NÃO ENCONTRADO"
                })
            }

            const validPassword = await bcrypt.compare(password, userExists[0].password)
            if(!validPassword) {
                return res.status(401).json({
                    message: "Palavra-passe inválida!!"
                })
            }

            const accessToken = jwt.sign(
                {
                    id: userExists[0].id,
                    email: userExists[0].email,
                    name: userExists[0].name,
                    role: userExists[0].role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '15m'
                }
            )

            return res.status(200).json({
                message: "LOGIN EFETUADO COM SUCESSO.",
                token: accessToken
            })
        }
        catch(error){
            console.error(error)
            return res.status(500).json({
                message: "OCORREU UM ERRO NO SERVIDOR",
                errorMessage: error.message
            })
        }
    }
}

export default authController