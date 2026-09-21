import 'dotenv/config';
import express from 'express';
import cors from "cors"; // <--- Importar o cors
import errorMiddleware from "./middlewares/errorMiddleware.js"; // <--- Importar o middleware de erro

import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import saleRoutes from './routes/saleRoutes.js';
import productRoutes from './routes/productRoutes.js';
import serviceRoutes from "./routes/serviceRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import phoneRoutes from "./routes/phoneRoutes.js";

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors()); // <--- Habilitar o CORS para o front-end comunicar sem bloqueios
app.use(express.json());

// Registo de todas as rotas da aplicação em equipa
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/", saleRoutes);
app.use("/products",productRoutes);
app.use("/services", serviceRoutes);
app.use("/items", itemRoutes);
app.use("/addresses", addressRoutes);
app.use("/phones", phoneRoutes);

// Middleware global de tratamento de erros (deve ser o último app.use!)
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
});