import pet from "../models/Pet.js";

class petController {

    static async listarPets(req, res) {
        try {
            const listaPets = await pet.find().populate('cliente');
            res.status(200).json(listaPets);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar pets", error });
        }
    }

    static async cadastrarPet(req, res) {
        try {
            const novoPet = await pet.create(req.body);
            res.status(201).json({ message: "Pet cadastrado com sucesso", novoPet });
        } catch (error) {
            res.status(500).json({ message: "Erro ao cadastrar pet", error });
        }
    }
}

export default petController;
