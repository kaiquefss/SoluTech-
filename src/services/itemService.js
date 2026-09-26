import itemRepository from "../repositories/itemRepository.js";

const itemService = {
RetrieveItem: async() => {
        const resultado = await itemRepository.select();
        return resultado
    },
    RetrieveItemId: async(itemId) => {
         const resultado = await itemRepository.selectId(itemId);
        return resultado
    },
    RetrieveItemEmail: async(itemId) => {
         const resultado = await itemRepository.selectEmail(itemId);
        return resultado
    },
    deleteCliente: async(itemId) => {
         const resultado = await itemRepository.delete(itemId);
        return resultado
    },
    createCliente: async(item) => {
        
         const resultado = await itemRepository.create(
            item
        );
        return resultado
    },
    updateItem: async(item) => {
         const resultado = await itemRepository.update(
            item
        );
        return resultado
    }
}

export default itemService