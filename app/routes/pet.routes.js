module.exports = app => {
    const pets = require("../controllers/pet.controller.js");
  
    var router = require("express").Router();

    router.post("/", pets.create);

    router.get("/", pets.findAll);

    router.get("/:id", pets.findOne);
  
    router.put("/:id", pets.update);
  
    router.delete("/:id", pets.delete);
  
    router.delete("/", pets.deleteAll);
  
    app.use("/api/pets", router);
  };
  