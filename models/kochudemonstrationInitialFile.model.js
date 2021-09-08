module.exports = (sequelize, Sequelize) => {
    const kochudemonstrationInitialFile = sequelize.define("kochudemonstrationinitialfile", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      title: {
        type: Sequelize.STRING
      },
      image : {
        type: Sequelize.STRING
      },
      dd_id : {
        type: Sequelize.STRING
      },
      upazilla_id : {
        type: Sequelize.STRING
      }
      
    });
  
    return kochudemonstrationInitialFile;
  };