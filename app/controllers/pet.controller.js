const db = require("../models");
const Pet = db.pets;
const Op = db.Sequelize.Op;

// Create and Save a new Pet
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Pet
  const pet = {
    nome: req.body.nome,
    tipo: req.body.tipo,
    idade: req.body.idade
  };

  // Save Pet in the database
  Pet.create(pet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pet."
      });
    });
};

// Retrieve all Clientes from the database.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;

  Pet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pets."
      });
    });
};

// Find a single Pet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Pet.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Pet with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pet with id=" + id
      });
    });
};

// Update a Pet by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Pet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pet with id=${id}. Maybe Pet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pet with id=" + id
      });
    });
};

// Delete a Pet with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pet with id=${id}. Maybe Pet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pet with id=" + id
      });
    });
};

// Delete all Clientes from the database.
exports.deleteAll = (req, res) => {
  Pet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Clientes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pets."
      });
    });
};

exports.count = (req, res) => {
  Pet.count().then(count => {
    res.send({ pets: count });
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred!"
    })
  })
}
