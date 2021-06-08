module.exports = (sequelize, Sequelize) => {
    const kochudemonstrationFinal = sequelize.define("kochudemonstrationfinal", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      pname: {
        type: Sequelize.STRING
      },
      psize: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      achieved: {
        type: Sequelize.STRING
      },
    name: {
      type: Sequelize.STRING
    },
    nid: {
      type: Sequelize.STRING
    },
    saao: {
      type: Sequelize.STRING
    },
    crop: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    },
    bij: {
      type: Sequelize.STRING
    },
    uria: {
      type: Sequelize.STRING
    },
    tsp: {
      type: Sequelize.STRING
    },
    mop: {
      type: Sequelize.STRING
    },
    vermi: {
      type: Sequelize.STRING
    },
    other: {
      type: Sequelize.STRING
    },
    garden: {
      type: Sequelize.STRING
    },
    water: {
      type: Sequelize.STRING
    },
    pot: {
      type: Sequelize.STRING
    },
    cother: {
      type: Sequelize.STRING
    },
    signboard: {
      type: Sequelize.STRING
    },
    bdate: {
      type: Sequelize.STRING
    },
    comment: {
      type: Sequelize.STRING
    },
    sobjiDate: {
      type: Sequelize.STRING
    },
    pfolon: {
      type: Sequelize.STRING
    },
    hfolon: {
      type: Sequelize.STRING
    },
    fcomment: {
      type: Sequelize.STRING
    },
    kcomment: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.STRING
    },
    upazilla_id: {
      type: Sequelize.INTEGER
    }
    });
  
    return kochudemonstrationFinal;
  };