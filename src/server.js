import 'dotenv/config'
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js';

const app = express();

const port = process.env.SERVER_PORT

app.use(express.json())
app.use("/users", userRoutes)
app.use("/auth", authRoutes)

app.listen(port, () => {
    console.log('SERVIDOR RODANDO NA PORTA 3000')
})
