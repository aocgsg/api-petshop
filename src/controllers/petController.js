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

    static async listarPetsPorEspecie(req, res) {
        const especie = req.query.especie;
        try {
            const petPorEspecie = await pet.find({ "especie": especie })
            res.status(200).json(petPorEspecie);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar pets por especie", error });
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

    static async atualizarPet(req, res) {
        try {
            const id = req.params.id
            await pet.findByIdAndUpdate(id, req.body)
            res.status(200).send("Pet atualizado com sucesso!")
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar pet", error });
        }
    }

    static async removerPet(req, res) {
        try {
            const id = req.params.id
            await pet.findByIdAndDelete(id)
            res.status(200).send("Deletado com sucesso!")
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar pet", error });
        }
    }
}

export default petController;
