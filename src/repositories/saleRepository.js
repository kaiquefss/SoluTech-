// Importa o "pool" de conexões configurado no projeto. 
// O pool gerencia conexões reutilizáveis com o banco, garantindo mais eficiência.
import pool from "../configs/Database.js";

const saleRepository = {

    /**
     * 1. CADASTRAR A VENDA PRINCIPAL (Cabeçalho)
     * Insere os dados gerais da venda na tabela 'sales' e retorna o ID gerado automaticamente.
     */
    createSale: async (saleData) => {
        // Comando SQL com interrogações (?) para evitar SQL Injection (segurança)
        const sql = 'INSERT INTO sales (number, payment_method, total_value, id_clients, id_users) VALUES (?, ?, ?, ?, ?)';
        
        // Array com os valores que vão substituir as interrogações na ordem exata
        const values = [saleData.number, saleData.payment_method, saleData.total_value, saleData.id_clients, saleData.id_users];
        
        // Executa a query usando o pool. 
        // O JavaScript desestrutura o resultado pegando apenas o primeiro elemento ([result]), 
        // que traz metadados sobre a inserção (como o ID gerado).
        const [result] = await pool.execute(sql, values);
        
        // Retorna o ID único da venda recém-criada (essencial para vincular os itens logo em seguida)
        return result.insertId;
    },

    /**
     * 2. CADASTRAR OS ITENS DA VENDA
     * Salva cada produto ou serviço comprado na tabela 'itens', associando-os ao ID da venda.
     */
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

    /**
     * 3. BUSCAR PRODUTO POR ID
     * Consulta o banco para pegar os dados de um produto específico (usado para verificar o estoque).
     */
    findProductById: async (productId) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        
        // O pool.execute retorna um array de arrays. O primeiro ([rows]) pega as linhas retornadas pela query.
        const [rows] = await pool.execute(sql, [productId]);
        
        // Retorna apenas o primeiro item encontrado ([0]), já que o ID é único
        return rows[0];
    },

    /**
     * 4. ATUALIZAR O ESTOQUE DO PRODUTO
     * Altera a quantidade de itens disponíveis no estoque após uma venda ser realizada.
     */
    updateProductStock: async (productId, newQuantity) => {
        const sql = 'UPDATE products SET quantity = ? WHERE id = ?';
        
        // Atualiza a quantidade do produto com base no ID dele
        await pool.execute(sql, [newQuantity, productId]);
    },

    /**
     * 5. LISTAR TODAS AS VENDAS
     * Retorna todas as vendas cadastradas na tabela 'sales'.
     */
    findAll: async () => {
        const sql = 'SELECT * FROM sales';
        
        // Busca todas as linhas da tabela
        const [rows] = await pool.execute(sql);
        
        // Retorna a lista completa de vendas
        return rows;
    }
};

// Exporta o objeto para que o 'saleService' possa utilizá-lo
export default saleRepository;