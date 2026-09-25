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
    updateCliente: async(client) => {
         const resultado = await clienteRepository.update(
            client
        );
        return resultado
    }
}

export default clienteService