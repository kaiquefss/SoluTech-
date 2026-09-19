import { Router } from "express";
import saleController from "../controllers/saleController.js";

const router = Router();

// Rota para listar todas as vendas (GET /sales)
router.get("/sales", saleController.select);

// Rota para registrar uma nova venda (POST /sales)
router.post("/sales", saleController.create);

export default router;