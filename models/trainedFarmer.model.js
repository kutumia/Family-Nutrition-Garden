module.exports = (sequelize, Sequelize) => {
    const trainedFarmer = sequelize.define("trainedfarmer", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      topic: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.INTEGER
      },
      achieved: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },    
      date: {
        type: Sequelize.STRING
      },
      finishDate: {
        type: Sequelize.STRING
      },
      resource: {
        type: Sequelize.STRING
      },
      feedback: {
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
  
    return trainedFarmer;
  };