import ItemRepository from "../repositories/itemRepository.js";
import Item from "../models/Item.js";

class ItemService {
    async createItem(data) {
        const { value, quantity, id_sales, id_products, id_services } = data;

        if (!value || !quantity || !id_sales) {
            throw new Error("Valor, quantidade e ID da venda são obrigatórios.");
        }

        const subtotal = value * quantity;
        
        // Seguindo a ordem do construtor: (id, value, quantity, subtotal, id_sales, id_products, id_services)
        const newItem = new Item(
            null, 
            value, 
            quantity, 
            subtotal, 
            id_sales, 
            id_products || null, 
            id_services || null
        );

        const itemId = await ItemRepository.create(newItem);
        return itemId;
    }

    async getItemsBySale(id_sales) {
        const items = await ItemRepository.findBySaleId(id_sales);
        return items;
    }

    async deleteItem(id) {
        const affectedRows = await ItemRepository.delete(id);
        if (affectedRows === 0) {
            throw new Error("Item não encontrado.");
        }
        return affectedRows;
    }
}

export default new ItemService();