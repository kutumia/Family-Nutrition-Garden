const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pd = require("./pd.model.js")(sequelize, Sequelize);
db.dd = require("./dd.model.js")(sequelize, Sequelize);
db.ad = require("./ad.model.js")(sequelize, Sequelize);
db.upazilla = require("./upazilla.model.js")(sequelize, Sequelize);
db.trainedFarmer = require("./trainedFarmer.model.js")(sequelize, Sequelize);
db.saao = require("./saao.model.js")(sequelize, Sequelize);
db.initialTrial = require("./initialTrial.model.js")(sequelize, Sequelize);
db.finalTrial = require("./finalTrial.model.js")(sequelize, Sequelize);
db.agriFair = require("./agriFair.model.js")(sequelize, Sequelize);
db.fieldDay = require("./fieldDay.model.js")(sequelize, Sequelize);
db.irrigation = require("./irrigation.model.js")(sequelize, Sequelize);
db.machinery = require("./machinery.model.js")(sequelize, Sequelize);
db.motivation = require("./motivation.model.js")(sequelize, Sequelize);
db.vermiCompostFinal = require("./vermiCompostFinal.model.js")(sequelize, Sequelize);
db.vermiCompostInitial = require("./vermiCompostInitial.model.js")(sequelize, Sequelize);
db.demonstrationFinal = require("./demonstrationFinal.model.js")(sequelize, Sequelize);
db.demonstrationInitial = require("./demonstrationInitial.model.js")(sequelize, Sequelize);
db.kochudemonstrationFinal = require("./kochudemonstrationFinal.model.js")(sequelize, Sequelize);
db.kochudemonstrationInitial = require("./kochudemonstrationInitial.model.js")(sequelize, Sequelize);
db.adademonstrationFinal = require("./adademonstrationFinal.model.js")(sequelize, Sequelize);
db.adademonstrationInitial = require("./adademonstrationInitial.model.js")(sequelize, Sequelize);

db.agriFairGallery = require("./agriFairGallery.model.js")(sequelize, Sequelize);
db.agriFairFile = require("./agriFairFile.model.js")(sequelize, Sequelize);

db.trainedFarmerGallery = require("./trainedFarmerGallery.model.js")(sequelize, Sequelize);
db.trainedFarmerFile = require("./trainedFarmerFile.model.js")(sequelize, Sequelize);

db.saaoGallery = require("./saaoGallery.model.js")(sequelize, Sequelize);
db.saaoFile = require("./saaoFile.model.js")(sequelize, Sequelize);

db.fieldDayGallery = require("./fieldDayGallery.model.js")(sequelize, Sequelize);
db.fieldDayFile = require("./fieldDayFile.model.js")(sequelize, Sequelize);

db.irrigationGallery = require("./irrigationGallery.model.js")(sequelize, Sequelize);
db.irrigationFile = require("./irrigationFile.model.js")(sequelize, Sequelize);

db.machineryGallery = require("./machineryGallery.model.js")(sequelize, Sequelize);
db.machineryFile = require("./machineryFile.model.js")(sequelize, Sequelize);

db.motivationGallery = require("./motivationGallery.model.js")(sequelize, Sequelize);
db.motivationFile = require("./motivationFile.model.js")(sequelize, Sequelize);

db.vermiCompostFinalGallery = require("./vermiCompostFinalGallery.model.js")(sequelize, Sequelize);
db.vermiCompostFinalFile = require("./vermiCompostFinalFile.model.js")(sequelize, Sequelize);

db.vermiCompostInitialGallery = require("./vermiCompostInitialGallery.model.js")(sequelize, Sequelize);
db.vermiCompostInitialFile = require("./vermiCompostInitialFile.model.js")(sequelize, Sequelize);

db.demonstrationFinalGallery = require("./demonstrationFinalGallery.model.js")(sequelize, Sequelize);
db.demonstrationFinalFile = require("./demonstrationFinalFile.model.js")(sequelize, Sequelize);

db.demonstrationInitialGallery = require("./demonstrationInitialGallery.model.js")(sequelize, Sequelize);
db.demonstrationInitialFile = require("./demonstrationInitialFile.model.js")(sequelize, Sequelize);

db.kochudemonstrationFinalGallery = require("./kochudemonstrationFinalGallery.model.js")(sequelize, Sequelize);
db.kochudemonstrationFinalFile = require("./kochudemonstrationFinalFile.model.js")(sequelize, Sequelize);

db.kochudemonstrationInitialGallery = require("./kochudemonstrationInitialGallery.model.js")(sequelize, Sequelize);
db.kochudemonstrationInitialFile = require("./kochudemonstrationInitialFile.model.js")(sequelize, Sequelize);

db.adademonstrationFinalGallery = require("./adademonstrationFinalGallery.model.js")(sequelize, Sequelize);
db.adademonstrationFinalFile = require("./adademonstrationFinalFile.model.js")(sequelize, Sequelize);

db.adademonstrationInitialGallery = require("./adademonstrationInitialGallery.model.js")(sequelize, Sequelize);
db.adademonstrationInitialFile = require("./adademonstrationInitialFile.model.js")(sequelize, Sequelize);



module.exports = db;