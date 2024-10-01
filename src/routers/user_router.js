import express from "express"
import user_controller from "../controllers/user_controller.js"

const router = express.Router()

router.post("/login", user_controller.login)
router.post("/singup", user_controller.signup)

export default router