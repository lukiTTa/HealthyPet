module.exports = app => {
    const diagnosticos = require("../controllers/diagnostico.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Diagnostico
    router.post("/", diagnosticos.create);
  
    // Retrieve all Diagnosticos
    router.get("/", diagnosticos.findAll);
  
    // Retrieve a single Diagnostico with id
    router.get("/:id", diagnosticos.findOne);
  
    // Update a Diagnostico with id
    router.put("/:id", diagnosticos.update);
  
    // Delete a Diagnostico with id
    router.delete("/:id", diagnosticos.delete);
  
    // Delete all Diagnosticos
    router.delete("/", diagnosticos.deleteAll);
  
    app.use("/api/diagnosticos", router);
  };
  