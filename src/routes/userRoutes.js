import {Router} from 'express';
import userController from '../controllers/userController.js'
import authMiddleware from '../middlewares/authMiddleware.js';
import authAdminMiddleware from '../middlewares/authAdminMiddleware.js';


const userRoutes = Router()

userRoutes.get("/", userController.selecionar)
userRoutes.post("/", userController.criar)
userRoutes.delete("/:id", authMiddleware,authAdminMiddleware, userController.delete)
userRoutes.patch("/:id", userController.atualizar)


export default userRoutes;
