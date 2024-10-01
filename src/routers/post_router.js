import express from "express"
import authenticator from "../middlewares/authenticator.js"

const router = express.router()

//rotas públicas (sem autenticador)
router.get("/", index)
router.post("/:id", show)

//rotas particulares (com autenticador)
router.use(authenticator)
router.post("/", store)
router.put("/:id", update)
router.delete("/:id", destroy)