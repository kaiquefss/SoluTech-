import saleRepository from "../repositories/saleRepository.js";

const saleService = {
    createSale: async (saleData, items) => {
        let totalValue = 0;

        // 1. Validação prévia de estoque para cada item que seja produto
        for (const item of items) {
            if (item.id_products) {
                const product = await saleRepository.findProductById(item.id_products);
                if (!product) {
                    throw new Error(`Produto com ID ${item.id_products} não encontrado.`);
                }
                if (product.quantity < item.quantity) {
                    throw new Error(`Estoque insuficiente para o produto: ${product.name}. Disponível: ${product.quantity}`);
                }
                // Atribui o valor unitário atual do produto se não vier preenchido
                item.value = product.value;
            }
            
            // Calcula o subtotal do item
            item.subtotal = item.value * item.quantity;
            totalValue += item.subtotal;
        }

        saleData.total_value = totalValue;

        // 2. Cria a venda no banco e pega o ID gerado
        const saleId = await saleRepository.createSale(saleData);

        // 3. Insere os itens e atualiza o estoque dos produtos
        for (const item of items) {
            await saleRepository.createItem(item, saleId);

            if (item.id_products) {
                const product = await saleRepository.findProductById(item.id_products);
                const newQuantity = product.quantity - item.quantity;
                await saleRepository.updateProductStock(item.id_products, newQuantity);
            }
        }

        return { id: saleId, ...saleData, items };
    },

    getAllSales: async () => {
        return await saleRepository.findAll();
    }
};

export default saleService;