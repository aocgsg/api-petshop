import express from "express";
import petController from "../controllers/petController.js";

const routes = express.Router()

routes.get("/pets", petController.listarPets);
routes.get("/pets/busca", petController.listarPetsPorEspecie);
routes.post("/pets", petController.cadastrarPet);
routes.put("/pets/:id", petController.atualizarPet);
routes.delete("/pets/:id", petController.removerPet);

export default routes;