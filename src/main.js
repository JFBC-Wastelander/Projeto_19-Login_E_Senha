import express from "express";
import "dotenv/config";
import "./config/db.js"
import user_router from "./routers/user_router.js"
import post_router from "./routers/post_router.js"

const app = express();
app.use(express.json());

app.use("/user", user_router);
app.use("/post", post_router);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});