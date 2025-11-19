import express from "express";
import ClienteController from "../controllers/clienteController.js";

const routes = express.Router();

routes.get("/clientes", ClienteController.listarCliente);;
routes.post("/clientes", ClienteController.cadastrarCliente);

export default routes;