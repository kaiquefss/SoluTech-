import User from '../models/User.js';
import userService from '../services/userService.js'

const userController = {
    select: async (req, res) => {
        try{
            const resultado = await userService.RetrieveUser();
            res.status(200).json({
                message:"Usuarios recuperados com sucesso!",
                data: resultado
            })

        }
        catch(error){
            console.log(Error)
            res.status(500).json({
                message:"Erro ao recuperar usuarios!",
                data:error.message
            })
        }
    },
    create: async (req,res)  => {
       try{
        const {name, email, password, role} = req.body

        const hashedPassword = await userService.hashedPassword(password)
         
        const user = new User(name, email, hashedPassword,role,null)
        const resultado = await userService.createUser(user);
        return res.status(201).json({
            message: "Usuario criado com sucesso",
            data: resultado
        })
       }
       catch(error){
        console.error(error)
        return res.status(500).json({
            message:"Error ao criar usuario",
            data: error.message
        })
       }
    },

    delete: async(req,res) => {
        try{
            const id = req.params.id;
            const resultado = await userService.deleteUser(id)
            return res.status(200).json({
                msg: "USUARIO DELETADO",
                data:resultado
            })
        }
        catch(error){
            console.log(error)
            return res.status(500).json({msg: 'ERRO AO DELETAR USUARIO!'})
        }
    },
    update: async(req,res) => {
        try{const {id} = req.params;
        const {name,email, password} = req.body
        const user = new User(name, email, password, null, id)
        const resultado = await userService.updateUser(user)
            return res.status(200).json({
                msg: "USUARIO EDITADO",
                data: resultado
            })}

        catch(error){
        console.log(error)
            return res.status(500).json({'msg': 'ERRO AO EDITAR O USUARIO!'})
    }
    }
}

export default userController;