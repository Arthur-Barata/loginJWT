import express from "express";
import cors from "cors";
import methodControler from "../routerControll.js"




const router =express.Router()

router.use(express.json());

router.use(cors());

router.get("/login",methodControler.login)

router.post("/register",methodControler.register)

export default router;