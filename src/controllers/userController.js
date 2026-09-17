import User from '../models/User.js';
import userService from '../services/userService.js'

const userController = {
    selecionar: async (req, res) => {
        try{
            const resultado = await userService.recuperarUsuario();
            res.status(200).json({
                message:"Usuarios recuperados com sucesso!",
                data: resultado
            })

        }
        catch(error){
            console.log(Error)
            res.status(500).json({
                message:"Erro ao recuperafr usuarios!",
                data:error.message
            })
        }
    },
    criar: async (req,res)  => {
       try{
        const {name, email, password, role} = req.body

        const hashedPassword = await userService.hashedPassword(password)
         
        const user = new User(name, email, hashedPassword,role,null)
        const resultado = await userService.criarUsuario(user);
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
        try{const id = req.params.id;
            const resultado = await userService.deletarUsuario(id)
            return res.status(200).json({
                msg: "USUARIO DELETADO",
                data:resultado
    })}
    catch(error){
        console.log(error)
            return res.status(500).json({'msg': 'ERRO AO DELETAR USUARIO!'})
    }
    },
    atualizar: async(req,res) => {
        try{const {id} = req.params;
        const {name,email, password} = req.body
        const user = new User(name, email, password, id)
        const resultado = await userService.atualizarUsuario(user)
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