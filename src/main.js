import e from "express";
import "dotenv/config.js";
import "./config/db.js";
import user_router from "./routers/user_router.js";
import post_router from "./routers/post_router.js"

const app = e();

app.use(e.json());
app.use("/user", user_router);
app.use("/post", post_router);

app.listen(process.env.API_PORT, () => console.log("Server running"));