import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import saleRoutes from './routes/saleRoutes.js';
import productRouters from './routers/productRouters.js';
import serviceRoutes from "./routes/serviceRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import phoneRoutes from "./routes/phoneRoutes.js";

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

// Registo de todas as rotas da aplicação em equipa
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/", saleRoutes);
app.use(productRouters);
app.use("/services", serviceRoutes);
app.use("/items", itemRoutes);
app.use("/addresses", addressRoutes);
app.use("/phones", phoneRoutes);

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
});