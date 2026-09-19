import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import saleRoutes from './routes/saleRoutes.js';
import productRouters from './routers/productRouters.js';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

// Registo de todas as rotas da aplicação em equipa
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/", saleRoutes);
app.use(productRouters);

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
});