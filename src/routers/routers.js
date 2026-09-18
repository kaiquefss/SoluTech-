import {Router} from "express";
import produtosController from "../controllers/produtosController.js";

const produtosRouters = Router();

produtosRouters.get("/produtos", produtosController.listProducts);
produtosRouters.get("/produtos/:id", produtosController.productsId);
produtosRouters.post("/produtos", produtosController.createProducts);
produtosRouters.put("/produtos/:id", produtosController.updateProducts);
produtosRouters.patch("/produtos/:id", produtosController.updateProduct);
produtosRouters.delete("/produtos/:id", produtosController.deleteProducts);

export default produtosRouters;
