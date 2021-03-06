module.exports = (sequelize, Sequelize) => {
    const saao = sequelize.define("saao", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      vname: {
        type: Sequelize.STRING
      },
      mnum: {
        type: Sequelize.STRING
      },
      nid: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      finishDate: {
        type: Sequelize.STRING
      },
      ddComment: {
        type: Sequelize.STRING
      },
      pdComment: {
        type: Sequelize.STRING
      },
      batch: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return saao;
  };