import Sale from "../models/Sale.js";
import saleService from "../services/saleService.js";

const saleController = {
    /**
     * Responsável por buscar e retornar todas as vendas cadastradas.
     * Rota esperada: GET /sales
     */
    select: async (req, res) => {
        try {
            // Chama a camada de serviço para buscar os registros de vendas
            const result = await saleService.getAllSales();
            
            // Retorna sucesso (200 OK) com os dados encontrados
            return res.status(200).json({
                message: "Sales successfully recovered!",
                data: result
            });
        } catch (error) {
            // Captura qualquer erro inesperado no servidor e retorna status 500
            console.log(error);
            return res.status(500).json({
                message: "Error retrieving sales!",
                data: error.message
            });
        }
    },

    /**
     * Responsável por registrar uma nova venda, validando itens, 
     * calculando valores totais e realizando a baixa automática no estoque.
     * Rota esperada: POST /sales
     */
    create: async (req, res) => {
        try {
            // Extrai os dados principais e a lista de itens enviados na requisição (req.body)
            const { number, payment_method, id_clients, id_users, items } = req.body;

            // Validação de negócio: garante que a venda não seja finalizada sem nenhum item
            if (!items || items.length === 0) {
                return res.status(400).json({ message: "The sale must contain at least one item." });
            }

            // Agrupa os dados gerais da venda em um único objeto
            const saleData = { number, payment_method, id_clients, id_users };
            
            // Delega para o service a lógica complexa (validar estoque, salvar venda, itens e atualizar produtos)
            const novaVenda = await saleService.createSale(saleData, items);

            // Retorna sucesso de criação (201 Created) junto com os dados da venda processada
            return res.status(201).json({
                message: "Venda realizada e estoque atualizado com sucesso!",
                data: novaVenda
            });
        } catch (error) {
            // Caso ocorra erro de validação (ex: estoque insuficiente) ou falha, retorna status 400
            return res.status(400).json({
                message: "Erro ao realizar venda!",
                data: error.message
            });
        }
    }
};

export default saleController;

/* O que vale a pena fazer agora?
Como você está focando na parte principal da sua feature,
 o ideal é seguir esta ordem de prioridade:Garantir o 
 essencial funcionando: O select (listar) e o 
 create (com a baixa de estoque que estruturamos).  
  Consultar o grupo: Alinhem com os outros dois
   integrantes e vejam se o professor exigiu explicitamente um 
   CRUD completo para vendas ou apenas a emissão e listagem
    de pedidos.Se precisarem do delete/atualizar:
     Podemos adaptar a mesma estrutura do userController 
     para o saleController, lembrando apenas de cuidar 
     da regra do estoque caso uma venda seja desfeita!*/