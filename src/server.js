import "dotenv/config";
import express from "express";
import productRouters from "./routers/productRouters.js";

const app = express();
app.use(express.json());
app.use(productRouters);

const PORT = process.env.SERVER_PORT || 3000;

app.get("/products", productRouters);
app.get("/products/:id", productRouters);
app.post("/products", productRouters);
app.put("/products/:id", productRouters);
app.patch("/products/:id", productRouters);
app.delete("/products/:id", productRouters);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
