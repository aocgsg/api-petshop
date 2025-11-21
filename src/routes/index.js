import express from "express";
import clientes from "./clientesRoutes.js";
import pets from "./petRoutes.js"


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("PetShop Home"));

    app.use(express.json(), clientes, pets);
}

export default routes;