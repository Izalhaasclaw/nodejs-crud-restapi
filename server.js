import express from "express" ;
import dotenv from "dotenv" ;

import userRoutes from "./routes/userRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config() ;

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/product", productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server berjalan pada http://localhost:${process.env.PORT}`) ;
}) ;