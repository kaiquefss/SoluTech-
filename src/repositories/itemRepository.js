import { pool } from "../configs/database.js";

class ItemRepository {
    async create(item) {
        const query = "INSERT INTO itens (value, quantity, subtotal, id_sales, id_products, id_services) VALUES (?, ?, ?, ?, ?, ?)";
        const [result] = await pool.execute(query, [
            item.value,
            item.quantity,
            item.subtotal,
            item.id_sales,
            item.id_products,
            item.id_services
        ]);
        return result.insertId;
    }

    async findBySaleId(id_sales) {
        const query = "SELECT * FROM itens WHERE id_sales = ?";
        const [rows] = await pool.execute(query, [id_sales]);
        return rows;
    }

    async delete(id) {
        const query = "DELETE FROM itens WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows;
    }
}

export default new ItemRepository();