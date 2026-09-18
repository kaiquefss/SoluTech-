import produtosRepositories from "../repositories/produtosRepositories.js";

const productService = {
    recoverproducts: async () => {
        const result = await produtosRepositories.listProducts();
        return result;
    },
    recoverproductsbyID: async (ID) => {
        const result = await produtosRepositories.productsId(ID);
        return result;
    },
    createProduct: async (products) => {
        const result = await produtosRepositories.createProducts(
            products.name, products.description, products.quantity, products.value
        );
        return result;
    },
    updateProduct: async (products) => {
        const result = await produtosRepositories.updateProducts(
            products.name, products.description, products.quantity, products.value, products.id
        );
    },
    updateID: async (ID, valores) => {
        const result = await produtosRepositories.update(ID, valores);
        return result;
    },
    deleteProducts: async (ID) => {
        const result = await produtosRepositories.delete(ID);
        return result
    }
}

export default productService;