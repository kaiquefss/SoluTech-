import Sale from "../models/Sale.js";
import saleService from "../services/saleService.js";

const saleController = {
    select: async (req, res) => {
        try {
            const resultado = await saleService.getAllSales();
            return res.status(200).json({
                message: "LISTA DE VENDAS",
                data: resultado
            });
        } 
        catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao recuperar vendas!",
                data: error.message
            });
        }
    },

    create: async (req, res) => {
        try {
            const { sale_date, number, payment_method, total_value, id_clients, id_users, items } = req.body;
            console.log(sale_date, number, payment_method, total_value, id_clients, id_users);

            if (!number || !payment_method || !id_clients || !id_users) {
                return res.status(400).json({
                    message: "Informações incompletas ou erradas para a venda."
                });
            }

            // Instancia o objeto Sale (null no ID, pois é gerado automaticamente na BD)
            const sale = new Sale(null, sale_date, number, payment_method, total_value || 0, id_clients, id_users);
            
            const resultado = await saleService.createSale(sale, items);
            
            return res.status(201).json({
                message: "Venda realizada com sucesso!",
                data: resultado
            });
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao realizar venda!",
                data: error.message
            });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { sale_date, number, payment_method, total_value, id_clients, id_users } = req.body;

            // Instancia a venda passando o ID recuperado da rota
            const sale = new Sale(id, sale_date, number, payment_method, total_value, id_clients, id_users);
            
            const resultado = await saleService.updateSale(sale);

            return res.status(200).json({
                message: "VENDA EDITADA COM SUCESSO",
                data: resultado
            });
        } 
        catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "ERRO AO EDITAR A VENDA!"
            });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const resultado = await saleService.deleteSale(id);

            return res.status(200).json({
                message: "VENDA DELETADA COM SUCESSO",
                data: resultado
            });
        } 
        catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "ERRO AO DELETAR VENDA!"
            });
        }
    }
};

export default saleController;