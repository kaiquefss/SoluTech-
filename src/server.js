import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import saleRoutes from './routes/saleRoutes.js';

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/sales", saleRoutes);

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
});