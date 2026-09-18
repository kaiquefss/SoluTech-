import produtos from "../models/produtos.js";
import produtoService from "../services/produtoService.js";

const produtosControllers = {
    listProducts: async (req, res) => {
        try {
            const result = await produtoService.recoverproducts();
            return res.status(200).json({
                message: "Product list by suproducts listed successfully",
                data: result
            });
        }

        catch (error) {
            return res.status(500).json({
                message: "Error listing products",
                data: error.message
            });
        }

    },
    productsId: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await produtoService.recoverproductsbyID(id);
            return res.status(200).json({
                message: "Product listed successfully",
                data: result
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Error listing product",
                data: error.message
            });
        }
    },
    createProducts: async (req, res) => {
        try {
            const { name, description, quantity, value } = req.body;
            const result = await produtoService.createProduct({ name, description, quantity, value });
            return res.status(201).json({
                message: "Product created successfully",
                data: result
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Error creating product",
                data: error.message
            });
        }
    },
    updateProducts: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, quantity, value } = req.body;
            const result = await produtoService.updateProduct(id, { name, description, quantity, value });
            return res.status(200).json({
                message: "Product updated successfully",
                data: result
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Error updating product",
                data: error.message
            });
        }
    },
    updateProduct: async (req, res) => {
        try {

            const { id } = req.params;
            const index = produtos.findIndex((product) => product.id === parseInt(id));
            if (index === -1) {
                return res.status(404).json({
                    message: "Product not found",
                });
            }
            product[index] = {
                ...product[index],
                ...req.body
            };
            return res.status(200).json({
                message: "Product updated successfully",
                data: product[index]
            });
        }
        
        catch(error) {
        return res.status(500).json({
            message: "Error updating product",
            data: error.message
        });
    }
},

    deleteProducts: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await produtoService.deleteProducts(id);
            return res.status(200).json({
                message: "Product deleted successfully",
                data: result
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Error deleting product",
                data: error.message
            });
        }
    }
}

export default produtosControllers;
