module.exports = app => {
    const consultas = require("../controllers/consulta.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Consulta
    router.post("/", consultas.create);
  
    // Retrieve all Consultas
    router.get("/", consultas.findAll);
  
    // Retrieve a single Consulta with id
    router.get("/:id", consultas.findOne);
  
    // Update a Consulta with id
    router.put("/:id", consultas.update);
  
    // Delete a Consulta with id
    router.delete("/:id", consultas.delete);
  
    // Delete all Consultas
    router.delete("/", consultas.deleteAll);
  
    app.use("/api/consultas", router);
  };
  