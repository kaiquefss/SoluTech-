import connect from "../configs/Database.js"; // Ajuste conforme seu arquivo de conexão

const saleRepository = {
    // Insere a venda principal
    createSale: async (saleData) => {
        const conn = await connect();
        const sql = `INSERT INTO sales (number, payment_method, total_value, id_clients, id_users) VALUES (?, ?, ?, ?, ?)`;
        const values = [saleData.number, saleData.payment_method, saleData.total_value, saleData.id_clients, saleData.id_users];
        const [result] = await conn.execute(sql, values);
        return result.insertId;
    },

    // Insere os itens vinculados à venda
    createItem: async (itemData, saleId) => {
        const conn = await connect();
        const sql = `INSERT INTO itens (value, quantity, subtotal, id_sales, id_products, id_services) VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [itemData.value, itemData.quantity, itemData.subtotal, saleId, itemData.id_products || null, itemData.id_services || null];
        await conn.execute(sql, values);
    },

    // Busca um produto para checar o estoque atual
    findProductById: async (productId) => {
        const conn = await connect();
        const [rows] = await conn.execute(`SELECT * FROM products WHERE id = ?`, [productId]);
        return rows[0];
    },

    // Atualiza o estoque do produto subtraindo a quantidade vendida
    updateProductStock: async (productId, newQuantity) => {
        const conn = await connect();
        const sql = `UPDATE products SET quantity = ? WHERE id = ?`;
        await conn.execute(sql, [newQuantity, productId]);
    },

    findAll: async () => {
        const conn = await connect();
        const [rows] = await conn.execute(`SELECT * FROM sales`);
        return rows;
    }
};

export default saleRepository;