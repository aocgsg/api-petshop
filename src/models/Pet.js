import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    especie: { type: String },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "clientes", required: true }
}, 
{
    versionKey: false
});

const pet = mongoose.model("pets", petSchema);

export default pet;