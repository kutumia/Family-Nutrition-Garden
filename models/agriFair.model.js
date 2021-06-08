module.exports = (sequelize, Sequelize) => {
    const agriFair = sequelize.define("agrifair", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      topic: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      resource: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      ddComment: {
        type: Sequelize.STRING
      },
      pdComment: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      batch: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return agriFair;
  };