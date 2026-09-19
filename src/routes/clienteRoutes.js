import { Router } from "express";   
import clienteController from '../controllers/clienteController.js'


const clienteRoutes = Router()

clienteRoutes.get("/", clienteController.select)
clienteRoutes.post("/", clienteController.create)
clienteRoutes.delete("/:id", clienteController.delete)
clienteRoutes.patch("/:id", clienteController.update)


export default clienteRoutes;