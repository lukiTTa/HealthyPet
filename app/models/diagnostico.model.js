module.exports = (sequelize, Sequelize) => {
    const Diagnostico = sequelize.define("diagnostico", {
      data: {
        type: Sequelize.DATEONLY
      },
      pet: { 
        type: Sequelize.STRING
      },
      doenca: {
        type: Sequelize.STRING
      },
      comentarios: {
        type: Sequelize.STRING
      }
    });
  
    return Diagnostico;
  };
  