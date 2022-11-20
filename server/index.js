import express from "express";
import cors from "cors";
import router from "./apiRouter/router.js"


const app = express();

app.use("/apiRouter",router)
app.use(express.json());
app.use(cors());






app.listen(3001,()=>{ 
    console.log("seu servidor esta rodando na porta 3001")
});