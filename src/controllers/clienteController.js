import cliente from "../models/Cliente.js";

class ClienteController {

    static async listarCliente(req, res) {
        try {
            const listaClientes = await cliente.find({});
            res.status(200).json(listaClientes);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar clientes", error });
        }
    }

    static async cadastrarCliente(req, res) {
        try {
            const novoCliente = await cliente.create(req.body);
            res.status(201).json(novoCliente);
        } catch (error) {
            res.status(500).json({ message: "Erro ao cadastrar cliente", error });
        }
    }

}

export default ClienteController;