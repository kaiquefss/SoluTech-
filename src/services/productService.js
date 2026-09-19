import productRepositories from "../repositories/productRepositories.js";

const productService = {
    recoverproducts: async () => {
        const result = await productRepositories.listProducts();
        return result;
    },
    recoverproductsbyID: async (ID) => {
        const result = await productRepositories.productsId(ID);
        return result;
    },
    createProduct: async (products) => {
        const result = await productRepositories.createProducts(
            products.name, products.description, products.quantity, products.value
        );
        return result;
    },
    updateProduct: async (products) => {
        const result = await productRepositories.updateProducts(
            products.name, products.description, products.quantity, products.value, products.id
        );
    },
    updateID: async (product) => {
        const result = await productRepositories.update(product);
        return result;
    },
    deleteProducts: async (ID) => {
        const result = await productRepositories.delete(ID);
        return result
    }
}

export default productService;