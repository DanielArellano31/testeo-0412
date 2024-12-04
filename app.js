import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { test } from "./backend/controllers/jugadoresControllers";
dotenv.config();

mongoose.conect(process.env.urlbase)

.then(()=>{
    console.log("Si jala la mamada")
})

.catch((error)=>{
   console.log ("No jala la mamada",error)
})

const app = express();
app.use(cors());
app.listen(4000,()=>{
    console.log("Se escucha mamalon")
})

test()
