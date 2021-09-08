module.exports = (sequelize, Sequelize) => {
    const fieldDayGallery = sequelize.define("fielddaygallery", {
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
  
    return fieldDayGallery;
  };