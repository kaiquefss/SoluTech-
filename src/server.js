import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import saleRoutes from './routes/saleRoutes.js'; // 1. IMPORTAR AS ROTAS DE VENDAS

const app = express();

const port = process.env.SERVER_PORT;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/", saleRoutes); // 2. REGISTRAR AS ROTAS DE VENDAS

app.listen(port, () => {
    console.log('SERVIDOR RODANDO NA PORTA 3000');
});