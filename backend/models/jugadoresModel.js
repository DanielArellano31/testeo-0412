import { Schema,model } from "mongose";

const EsquemaJugadores = new Schema({
    name:String,
    apepat:String,
    number:Number
})

export const modeloJugadores = new model("jugadores", EsquemaJugadores)
