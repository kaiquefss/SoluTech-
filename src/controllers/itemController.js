import ItemService from "../services/itemService.js";

class ItemController {
    async create(req, res) {
        try {
            const itemId = await ItemService.createItem(req.body);
            return res.status(201).json({ message: "Item criado com sucesso!", id: itemId });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findBySale(req, res) {
        try {
            const items = await ItemService.getItemsBySale(req.params.id_sales);
            return res.status(200).json(items);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await ItemService.deleteItem(req.params.id);
            return res.status(200).json({ message: "Item deletado com sucesso!" });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export default new ItemController();