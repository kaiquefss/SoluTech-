import { Router } from "express";
import ServiceController from "../controllers/serviceController.js";

const router = Router();

router.post("/", ServiceController.create);
router.get("/", ServiceController.findAll);
router.get("/:id", ServiceController.findById);
router.put("/:id", ServiceController.update);
router.delete("/:id", ServiceController.delete);

export default router;