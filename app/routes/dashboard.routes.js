module.exports = app => {
    const pets = require("../controllers/pet.controller.js");
    const consulta = require("../controllers/consulta.controller.js");
    const cliente = require("../controllers/cliente.controller.js");
    const diagnostico = require("../controllers/diagnostico.controller.js");
  
    var router = require("express").Router();

    router.get("/petCount", pets.count);
    router.get("/consultaCount", consulta.count);
    router.get("/clienteCount", cliente.count);
    router.get("/diagnosticoCount", diagnostico.count);
  
    app.use("/api/dashboard", router);
  };
  