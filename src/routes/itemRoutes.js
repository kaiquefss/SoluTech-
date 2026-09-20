import { Router } from "express";
import ItemController from "../controllers/itemController.js";

const router = Router();

router.post("/", ItemController.create);
router.get("/sale/:id_sales", ItemController.findBySale);
router.delete("/:id", ItemController.delete);

export default router;