import itemService from '../services/itemService.js'

const itemController = {
    select: async (req, res) => {
        try{
            const resultado = await itemService.RetrieveItem();
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
        const {value,quantity,subtotal} = req.body
    
        if(!value || !quantity || !subtotal ){
            return res.status(404).json({
                message: "Informações incompletas ou erradas."
            })
        }

        const item = new Item(value, quantity, subtotal, null)
        
        const resultado = await itemService.createItem(item);
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
        
        const {name,email, cpf, phone, address} = req.body
        const phoneUser = new Phone(phone.observation, phone.number, phone.ddd, null);
        const addressUser = new Address(address.street, address.number, address.district, address.city, address.state, address.cep, null);
        const cliente = new Cliente(name, email, cpf, phoneUser, addressUser, id)
        console.log(phoneUser,addressUser)
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