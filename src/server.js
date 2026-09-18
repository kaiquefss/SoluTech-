import "dotenv/config";
import express from "express";
import produtosRouters from "./routers/produtosRouters.js";

const app = express();
app.use(express.json());
app.use(produtosRouters);

const PORT = process.env.SERVER_PORT || 3000;

app.get("/products", produtosRouters);
app.get("/products/:id", produtosRouters);
app.post("/products", produtosRouters);
app.put("/products/:id", produtosRouters);
app.patch("/products/:id", produtosRouters);
app.delete("/products/:id", produtosRouters);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
