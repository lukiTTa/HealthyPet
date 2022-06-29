module.exports = (sequelize, Sequelize) => {
    const Consulta = sequelize.define("consulta", {
      data: {
        type: Sequelize.DATEONLY
      },
      pet: {
        type: Sequelize.STRING
      },
      motivo: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.FLOAT
      }
    });
  
    return Consulta;
  };
  