import pool from "../configs/Database.js";

const saleRepository = {
    createSale: async (saleData) => {
        const sql = 'INSERT INTO sales (number, payment_method, total_value, id_clients, id_users) VALUES (?, ?, ?, ?, ?)';
        
        const values = [saleData.number, saleData.payment_method, saleData.total_value, saleData.id_clients, saleData.id_users];

        const [result] = await pool.execute(sql, values);
        
        return result.insertId;
    },

    createItem: async (itemData, saleId) => {
        const sql = 'INSERT INTO itens (value, quantity, subtotal, id_sales, id_products, id_services) VALUES (?, ?, ?, ?, ?, ?)';
        
        const values = [
            itemData.value, 
            itemData.quantity, 
            itemData.subtotal, 
            saleId, // Recebe o ID da venda que foi gerado no método anterior
            itemData.id_products || null,  // Se não for produto, envia null para o banco
            itemData.id_services || null   // Se não for serviço, envia null para o banco
        ];
        
        await pool.execute(sql, values);
    },

    findProductById: async (productId) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        
        const [rows] = await pool.execute(sql, [productId]);
        
        return rows[0];
    },

    updateProductStock: async (productId, newQuantity) => {
        const sql = 'UPDATE products SET quantity = ? WHERE id = ?';

        await pool.execute(sql, [newQuantity, productId]);
    },

    findAll: async () => {
        const sql = 'SELECT * FROM sales';

        const [rows] = await pool.execute(sql);
        
        return rows;
    }
};

export default saleRepository;