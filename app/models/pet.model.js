module.exports = (sequelize, Sequelize) => {
    const Pet = sequelize.define("pet", {
      nome: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      }
    });
  
    return Pet;
  };
  