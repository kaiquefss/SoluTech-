import {Router} from "express";
import productControllers from "../controllers/productController.js";

const productRoutes = Router();

productRoutes.get("/produtos", productControllers.listProducts);
productRoutes.get("/produtos/:id", productControllers.productsId);
productRoutes.post("/produtos", productControllers.createProducts);
productRoutes.put("/produtos/:id", productControllers.updateProducts);
productRoutes.patch("/produtos/:id", productControllers.updateProduct);
productRoutes.delete("/produtos/:id", productControllers.deleteProducts);

export default productRoutes;
