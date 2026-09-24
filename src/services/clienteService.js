import clienteRepository from "../repositories/clienteRepository.js";

const clienteService = {
RetrieveCliente: async() => {
        const resultado = await clienteRepository.select();
        return resultado
    },
    RetrieveClienteId: async(clienteId) => {
         const resultado = await clienteRepository.selectId(clienteId);
        return resultado
    },
    RetrieveClienteEmail: async(clienteId) => {
         const resultado = await clienteRepository.selectEmail(clienteId);
        return resultado
    },
    deleteCliente: async(clienteId) => {
         const resultado = await clienteRepository.delete(clienteId);
        return resultado
    },
    createCliente: async(cliente) => {
        
         const resultado = await clienteRepository.create(
            cliente
        );
        return resultado
    },
    updateCliente: async(cliente) => {
         const resultado = await clienteRepository.update(
            cliente.name,
            cliente.email,
            cliente.cpf,
            cliente.id
        );
        return resultado
    }
}

export default clienteService