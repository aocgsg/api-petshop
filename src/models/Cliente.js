import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true }
},
{
    versionKey: false
});

const cliente = mongoose.model("clientes", clienteSchema);

export default cliente;