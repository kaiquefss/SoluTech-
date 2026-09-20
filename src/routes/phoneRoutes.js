import { Router } from "express";
import PhoneController from "../controllers/phoneController.js";

const router = Router();

router.post("/", PhoneController.create);
router.get("/user/:id_users", PhoneController.findByUser);
router.delete("/:id", PhoneController.delete);

export default router;