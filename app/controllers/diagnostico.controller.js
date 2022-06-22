const db = require("../models");
const Diagnostico = db.diagnostico;
const Op = db.Sequelize.Op;

// Create and Save a new Diagnostico
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pet) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Diagnostico
  const diagnostico = {
    data: req.body.data,
    pet: req.body.pet,
    doenca: req.body.doenca,
    comentarios: req.body.comentarios
  };

  // Save Diagnostico in the database
  Diagnostico.create(diagnostico)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Diagnostico."
      });
    });
};

// Retrieve all Diagnosticos from the database.
exports.findAll = (req, res) => {

  Diagnostico.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving diagnosticos."
      });
    });
};

// Find a single Diagnostico with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Diagnostico.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Diagnostico with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Diagnostico with id=" + id
      });
    });
};

// Update a Diagnostico by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Diagnostico.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Diagnostico was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Diagnostico with id=${id}. Maybe Diagnostico was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Diagnostico with id=" + id
      });
    });
};

// Delete a Diagnostico with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Diagnostico.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Diagnostico was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Diagnostico with id=${id}. Maybe Diagnostico was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Diagnostico with id=" + id
      });
    });
};

// Delete all Diagnosticos from the database.
exports.deleteAll = (req, res) => {
  Diagnostico.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Diagnosticos were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all diagnosticos."
      });
    });
};
