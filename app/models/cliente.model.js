module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      }
    });
  
    return Cliente;
  };
  