import { Router } from "express";
import saleController from "../controllers/saleController.js";

const router = Router();

router.get("/", saleController.select);
router.post("/", saleController.create);
router.put("/:id", saleController.update);    // <--- Rota de atualizar
router.delete("/:id", saleController.delete); // <--- Rota de deletar

export default router;