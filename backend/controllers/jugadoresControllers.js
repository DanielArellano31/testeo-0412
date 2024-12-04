import { modeloJugadores } from "../models/jugadoresModel.js";

modeloJugadores.create({
        name:"Daniel ",
        apepat:"Arellano",
        number:10
})

export const test = ()=>{
    console.log("Funciona el controlador")
}