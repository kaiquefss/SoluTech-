import Sale from "../models/Sale.js"
import saleService from "../services/saleService.js"

const saleController = {
    select: async (req, res) => {
        try {
            const result = await saleService.getAllSales();
            return res.status(200).json({
                message: "Sales successfully recovered!",
                data: result
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error retrieving sales!",
                data: error.message
            });
        }
    },

    create: async (req, res) => {
        try {

            const {sale_date, number, payment_method, total_value, id_clients, id_users } = req.body;
            const seleDate = { number, payment_method, id_clients, id_users};

            const sale = new Sale(sale_date, number, payment_method, total_value, id_clients, id_users);
            const result = await saleService.createSale(sale, saleDate);
            //continua aqui
            return result;


            // // Espera receber { number, payment_method, id_clients, id_users, items: [...] }
            // const { number, payment_method, id_clients, id_users, items } = req.body;

            // if (!items || items.length === 0) {
            //     return res.status(400).json({ message: "The sale must contain at least one item." });
            // }

            // const saleData = { number, payment_method, id_clients, id_users };

            // const sale = new Sale(null, sale_date, number,)
            // const novaVenda = await saleService.createSale(saleData, items);

            // return res.status(201).json({
            //     message: "Venda realizada e estoque atualizado com sucesso!",
            //     data: novaVenda
            // });
        } 
        catch (error) {
            return res.status(400).json({
                message: "Erro ao realizar venda!",
                data: error.message
            });
        }
    }
};

export default saleController