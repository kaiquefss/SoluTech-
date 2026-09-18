import produtos from "../models/produtos.js";
import productService from "../services/produtoService.js";

const produtosControllers = {
    listProducts: async (req, res) =>{
        try{
            const result =  await productService.recoverproducts();
            return res.status(200).json({
                message: "Product list by suproducts listed successfully",
                data: result
            });
        }

        catch(error){
            return res.status(500).json({
                message: "Error listing products",
                data: error.message
            });
        }

    },
    productsId: async (req, res) =>{
        try{

        }
        catch(error){
            
        }
    }

}