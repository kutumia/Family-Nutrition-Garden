module.exports = (sequelize, Sequelize) => {
    const kochudemonstrationInitialGallery = sequelize.define("kochudemonstrationinitialgallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
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
  
    return kochudemonstrationInitialGallery;
  };