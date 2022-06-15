module.exports = (sequelize, Sequelize) => {
  const Teste = sequelize.define("teste", {
    title: {
      type: Sequelize.STRING
    },
    test: {
      type: Sequelize.INTEGER
    }
  });

  return Teste;
};
