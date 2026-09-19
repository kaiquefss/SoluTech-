import {Router} from "express";
import productControllers from "../controllers/productController.js";

const productRouters = Router();

productRouters.get("/produtos", productControllers.listProducts);
productRouters.get("/produtos/:id", productControllers.productsId);
productRouters.post("/produtos", productControllers.createProducts);
productRouters.put("/produtos/:id", productControllers.updateProducts);
productRouters.patch("/produtos/:id", productControllers.updateProduct);
productRouters.delete("/produtos/:id", productControllers.deleteProducts);

export default productRouters;
