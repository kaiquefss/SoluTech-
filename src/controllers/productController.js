import Produto from "../models/Product.js";
import Product from "../models/Product.js";
import productService from "../services/productService.js";

const productControllers = {
    listProducts: async (req, res) => {
        try {
            const result = await productService.recoverproducts();
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
            const result = await productService.recoverproductsbyID(id);
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
            const product = new Product(null, name, description, quantity, value);
            const result = await productService.createProduct(product);
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
            const product = new Product(id, name, description, quantity, value);
            const result = await productService.updateProduct(product);
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
            const {name, description, quantity, value} = req.body;
            const product = new Product(id, name, description, quantity, value);
            const result = await productService.updateID(product);
            return res.status(200).json({
                message: "Product updated successfully",
                data: result
            });
            // const index = Product.findIndex((product) => product.id === parseInt(id));
            // if (index === -1) {
            //     return res.status(404).json({
            //         message: "Product not found",
            //     });
            // }
            // Product[index] = {
            //     ...Product[index],
            //     ...req.body
            // };
            // return res.status(200).json({
            //     message: "Product updated successfully",
            //     data: Product[index]
            // });
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
            const result = await productService.deleteProducts(id);
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

export default productControllers;
