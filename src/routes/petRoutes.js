import express from "express";
import petController from "../controllers/petController.js";

const routes = express.Router()

routes.get("/pets", petController.listarPets);
routes.post("/pets", petController.cadastrarPet);

export default routes;