import cliente from '../models/Cliente.js';
import clienteService from '../services/clienteService.js'

const clienteController = {
    select: async (req, res) => {
        try{
            const resultado = await clienteService.RetrieveCliente();
            res.status(200).json({
                message:"LISTA DE CLIENTES",
                data: resultado
            })

        }
        catch(error){
            console.log(Error)
            res.status(500).json({
                message:"Erro ao recuperar cliente!",
                data:error.message
            })
        }
    },
    create: async (req,res)  => {
       try{
        const {name, email, cpf} = req.body

        const cliente = new cliente(name, email,cpf ,null)
        const resultado = await clienteService.createCliente(cliente);
        return res.status(201).json({
            message: "cliente listado com sucesso",
            data: resultado
        })
       }
       catch(error){
        console.error(error)
        return res.status(500).json({
            message:"erro ao listar cliente",
            data: error.message
        })
       }
    },

    delete: async(req,res) => {
        try{
            const id = req.params.id;
            const resultado = await clienteService.deleteCliente(id)
            return res.status(200).json({
                msg: "CLIENTE DELETADO",
                data:resultado
            })
        }
        catch(error){
            console.log(error)
            return res.status(500).json({msg: 'ERRO AO DELETAR CLIENTE!'})
        }
    },
    update: async(req,res) => {
        try{const {id} = req.params;
        const {name,email, cpf} = req.body
        const cliente = new cliente(name, email, cpf, id)
        const resultado = await clienteService.updateCliente(cliente)
            return res.status(200).json({
                msg: "CLIENTE EDITADO",
                data: resultado
            })}

        catch(error){
        console.log(error)
            return res.status(500).json({'msg': 'ERRO AO EDITAR O CLIENTE !'})
    }
    }
}

export default clienteController;