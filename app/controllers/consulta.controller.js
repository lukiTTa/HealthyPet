const db = require("../models");
const Consulta = db.consulta;
const Op = db.Sequelize.Op;

// Create and Save a new Consulta
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pet) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Consulta
  const consulta = {
    data: req.body.data,
    pet: req.body.pet,
    motivo: req.body.motivo,
    valor: req.body.valor
  };

  // Save Consulta in the database
  Consulta.create(consulta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Consulta."
      });
    });
};

// Retrieve all Consultas from the database.
exports.findAll = (req, res) => {

  Consulta.findAll()
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

// Find a single Consulta with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Consulta.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Consulta with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Consulta with id=" + id
      });
    });
};

// Update a Consulta by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Consulta.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Consulta was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Consulta with id=${id}. Maybe Consulta was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Consulta with id=" + id
      });
    });
};

// Delete a Consulta with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Consulta.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Consulta was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Consulta with id=${id}. Maybe Consulta was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Consulta with id=" + id
      });
    });
};

// Delete all Consultas from the database.
exports.deleteAll = (req, res) => {
  Consulta.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Consultas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all diagnosticos."
      });
    });
};

exports.count = (req, res) => {
  Consulta.count().then(count => {
    res.send({ consultas: count });
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred!"
    })
  })
}
