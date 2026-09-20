import { Router } from "express";
import AddressController from "../controllers/addressController.js";

const router = Router();

router.post("/", AddressController.create);
router.get("/user/:id_users", AddressController.findByUser);
router.delete("/:id", AddressController.delete);

export default router;