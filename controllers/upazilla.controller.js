const db=require('../models');
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;       
const upazilla = db.upazilla;
const upazillaFile = db.upazillaFile;
const trainedFarmer = db.trainedFarmer;
const saao = db.saao;
const initialTrial = db.initialTrial;
const finalTrial = db.finalTrial;
const irrigation = db.irrigation;
const machinery = db.machinery;
const motivation = db.motivation;
const fieldDay = db.fieldDay;
const agriFair = db.agriFair;
const vermiCompostInitial = db.vermiCompostInitial;
const vermiCompostFinal = db.vermiCompostFinal;
const agriFairGallery = db.agriFairGallery;
const agriFairFile = db.agriFairFile;
const demonstrationInitial = db.demonstrationInitial;       
const demonstrationFinal = db.demonstrationFinal;
const kochudemonstrationInitial = db.kochudemonstrationInitial;       
const kochudemonstrationFinal = db.kochudemonstrationFinal;
const adademonstrationInitial = db.adademonstrationInitial;       
const adademonstrationFinal = db.adademonstrationFinal;

const adademonstrationFinalGallery = db.adademonstrationFinalGallery;
const adademonstrationFinalFile = db.adademonstrationFinalFile;

const adademonstrationInitialGallery = db.adademonstrationInitialGallery;
const adademonstrationInitialFile = db.adademonstrationInitialFile;

const demonstrationFinalGallery = db.demonstrationFinalGallery;
const demonstrationFinalFile = db.demonstrationFinalFile;

const demonstrationInitialGallery = db.demonstrationInitialGallery;
const demonstrationInitialFile = db.demonstrationInitialFile;

const fieldDayGallery = db.fieldDayGallery;
const fieldDayFile = db.fieldDayFile;

const irrigationGallery = db.irrigationGallery;
const irrigationFile = db.irrigationFile;

const kochudemonstrationFinalGallery = db.kochudemonstrationFinalGallery;
const kochudemonstrationFinalFile = db.kochudemonstrationFinalFile;

const kochudemonstrationInitialGallery = db.kochudemonstrationInitialGallery;
const kochudemonstrationInitialFile = db.kochudemonstrationInitialFile;

const machineryGallery = db.machineryGallery;
const machineryFile = db.machineryFile;

const motivationGallery = db.motivationGallery;
const motivationFile = db.motivationFile;

const saaoGallery = db.saaoGallery;
const saaoFile = db.saaoFile;

const trainedFarmerGallery = db.trainedFarmerGallery;
const trainedFarmerFile = db.trainedFarmerFile;

const vermiCompostFinalGallery = db.vermiCompostFinalGallery;
const vermiCompostFinalFile = db.vermiCompostFinalFile;

const vermiCompostInitialGallery = db.vermiCompostInitialGallery;
const vermiCompostInitialFile = db.vermiCompostInitialFile;


const multer = require("multer");
const path = require("path");

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');
let pdf = require("html-pdf");
let ejs = require("ejs");


  //multer setup for upazilla FIle-----------------
  var storageupazillaFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/upazillaFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadupazillaFile = multer({
    storage: storageupazillaFile,
  }).single("upazillaFile");
  exports.uploadupazillaFile = uploadupazillaFile;

//multer setup for trainedFarmer image-----------------
var storagetrainedFarmer = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/trainedFarmerGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadtrainedFarmer = multer({
    storage: storagetrainedFarmer,
  }).single("trainedFarmer");
  exports.uploadtrainedFarmer = uploadtrainedFarmer;

  //multer setup for trainedFarmer FIle-----------------
var storagetrainedFarmerFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/trainedFarmerFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadtrainedFarmerFile = multer({
    storage: storagetrainedFarmerFile,
  }).single("trainedFarmerFile");
  exports.uploadtrainedFarmerFile = uploadtrainedFarmerFile;

  //multer setup for saao image-----------------
var storagesaao = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/saaoGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadsaao = multer({
    storage: storagesaao,
  }).single("saao");
  exports.uploadsaao = uploadsaao;

  //multer setup for saao FIle-----------------
var storagesaaoFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/saaoFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadsaaoFile = multer({
    storage: storagesaaoFile,
  }).single("saaoFile");
  exports.uploadsaaoFile = uploadsaaoFile;

  //multer setup for irrigation image-----------------
var storageirrigation = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/irrigationGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadirrigation = multer({
    storage: storageirrigation,
  }).single("irrigation");
  exports.uploadirrigation = uploadirrigation;

  //multer setup for irrigation FIle-----------------
var storageirrigationFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/irrigationFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadirrigationFile = multer({
    storage: storageirrigationFile,
  }).single("irrigationFile");
  exports.uploadirrigationFile = uploadirrigationFile;

  //multer setup for machinery image-----------------
var storagemachinery = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/machineryGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadmachinery = multer({
    storage: storagemachinery,
  }).single("machinery");
  exports.uploadmachinery = uploadmachinery;

  //multer setup for machinery FIle-----------------
var storagemachineryFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/machineryFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadmachineryFile = multer({
    storage: storagemachineryFile,
  }).single("machineryFile");
  exports.uploadmachineryFile = uploadmachineryFile;

  //multer setup for motivation image-----------------
var storagemotivation = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/motivationGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadmotivation = multer({
    storage: storagemotivation,
  }).single("motivation");
  exports.uploadmotivation = uploadmotivation;

  //multer setup for motivation FIle-----------------
var storagemotivationFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/motivationFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadmotivationFile = multer({
    storage: storagemotivationFile,
  }).single("motivationFile");
  exports.uploadmotivationFile = uploadmotivationFile;

  //multer setup for fieldDay image-----------------
var storagefieldDay = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/fieldDayGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadfieldDay = multer({
    storage: storagefieldDay,
  }).single("fieldDay");
  exports.uploadfieldDay = uploadfieldDay;

  //multer setup for fieldDay FIle-----------------
var storagefieldDayFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/fieldDayFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadfieldDayFile = multer({
    storage: storagefieldDayFile,
  }).single("fieldDayFile");
  exports.uploadfieldDayFile = uploadfieldDayFile;


//multer setup for agriFair image-----------------
var storageagriFair = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/agriFairGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadagriFair = multer({
    storage: storageagriFair,
  }).single("agriFair");
  exports.uploadagriFair = uploadagriFair;

  //multer setup for agriFair FIle-----------------
var storageagriFairFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/agriFairFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadagriFairFile = multer({
    storage: storageagriFairFile,
  }).single("agriFairFile");
  exports.uploadagriFairFile = uploadagriFairFile;

  //multer setup for adademonstrationFinal image-----------------
var storageadademonstrationFinal = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/adademonstrationFinalGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadadademonstrationFinal = multer({
    storage: storageadademonstrationFinal,
  }).single("adademonstrationFinal");
  exports.uploadadademonstrationFinal = uploadadademonstrationFinal;

  //multer setup for adademonstrationFinal FIle-----------------
var storageadademonstrationFinalFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/adademonstrationFinalFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadadademonstrationFinalFile = multer({
    storage: storageadademonstrationFinalFile,
  }).single("adademonstrationFinalFile");
  exports.uploadadademonstrationFinalFile = uploadadademonstrationFinalFile;

  //multer setup for adademonstrationInitial image-----------------
var storageadademonstrationInitial = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/adademonstrationInitialGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadadademonstrationInitial = multer({
    storage: storageadademonstrationInitial,
  }).single("adademonstrationInitial");
  exports.uploadadademonstrationInitial = uploadadademonstrationInitial;

  //multer setup for adademonstrationInitial FIle-----------------
var storageadademonstrationInitialFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/adademonstrationInitialFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadadademonstrationInitialFile = multer({
    storage: storageadademonstrationInitialFile,
  }).single("adademonstrationInitialFile");
  exports.uploadadademonstrationInitialFile = uploadadademonstrationInitialFile;

  //multer setup for demonstrationFinal image-----------------
var storagedemonstrationFinal = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/demonstrationFinalGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploaddemonstrationFinal = multer({
    storage: storagedemonstrationFinal,
  }).single("demonstrationFinal");
  exports.uploaddemonstrationFinal = uploaddemonstrationFinal;

  //multer setup for demonstrationFinal FIle-----------------
var storagedemonstrationFinalFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/demonstrationFinalFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploaddemonstrationFinalFile = multer({
    storage: storagedemonstrationFinalFile,
  }).single("demonstrationFinalFile");
  exports.uploaddemonstrationFinalFile = uploaddemonstrationFinalFile;

  //multer setup for demonstrationInitial image-----------------
var storagedemonstrationInitial = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/demonstrationInitialGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploaddemonstrationInitial = multer({
    storage: storagedemonstrationInitial,
  }).single("demonstrationInitial");
  exports.uploaddemonstrationInitial = uploaddemonstrationInitial;

  //multer setup for demonstrationInitial FIle-----------------
var storagedemonstrationInitialFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/demonstrationInitialFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploaddemonstrationInitialFile = multer({
    storage: storagedemonstrationInitialFile,
  }).single("demonstrationInitialFile");
  exports.uploaddemonstrationInitialFile = uploaddemonstrationInitialFile;

  //multer setup for kochudemonstrationFinal image-----------------
var storagekochudemonstrationFinal = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/kochudemonstrationFinalGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadkochudemonstrationFinal = multer({
    storage: storagekochudemonstrationFinal,
  }).single("kochudemonstrationFinal");
  exports.uploadkochudemonstrationFinal = uploadkochudemonstrationFinal;

  //multer setup for kochudemonstrationFinal FIle-----------------
var storagekochudemonstrationFinalFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/kochudemonstrationFinalFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadkochudemonstrationFinalFile = multer({
    storage: storagekochudemonstrationFinalFile,
  }).single("kochudemonstrationFinalFile");
  exports.uploadkochudemonstrationFinalFile = uploadkochudemonstrationFinalFile;

  //multer setup for kochudemonstrationInitial image-----------------
var storagekochudemonstrationInitial = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/kochudemonstrationInitialGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadkochudemonstrationInitial = multer({
    storage: storagekochudemonstrationInitial,
  }).single("kochudemonstrationInitial");
  exports.uploadkochudemonstrationInitial = uploadkochudemonstrationInitial;

  //multer setup for kochudemonstrationInitial FIle-----------------
var storagekochudemonstrationInitialFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/kochudemonstrationInitialFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadkochudemonstrationInitialFile = multer({
    storage: storagekochudemonstrationInitialFile,
  }).single("kochudemonstrationInitialFile");
  exports.uploadkochudemonstrationInitialFile = uploadkochudemonstrationInitialFile;

  //multer setup for vermiCompostFinal image-----------------
var storagevermiCompostFinal = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/vermiCompostFinalGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadvermiCompostFinal = multer({
    storage: storagevermiCompostFinal,
  }).single("vermiCompostFinal");
  exports.uploadvermiCompostFinal = uploadvermiCompostFinal;

  //multer setup for vermiCompostFinal FIle-----------------
var storagevermiCompostFinalFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/vermiCompostFinalFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadvermiCompostFinalFile = multer({
    storage: storagevermiCompostFinalFile,
  }).single("vermiCompostFinalFile");
  exports.uploadvermiCompostFinalFile = uploadvermiCompostFinalFile;

  //multer setup for vermiCompostInitial image-----------------
var storagevermiCompostInitial = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/vermiCompostInitialGallery");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadvermiCompostInitial = multer({
    storage: storagevermiCompostInitial,
  }).single("vermiCompostInitial");
  exports.uploadvermiCompostInitial = uploadvermiCompostInitial;

  //multer setup for vermiCompostInitial FIle-----------------
var storagevermiCompostInitialFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/vermiCompostInitialFile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  var uploadvermiCompostInitialFile = multer({
    storage: storagevermiCompostInitialFile,
  }).single("vermiCompostInitialFile");
  exports.uploadvermiCompostInitialFile = uploadvermiCompostInitialFile;


module.exports.upazillalogin=async(req,res)=>{
    res.render('upazilla/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'' });
    // res.send("log");
};
module.exports.upazillaloginpost=async(req,res)=>{
    try {
        const uname = req.body.uname;
        const password = req.body.password;
        upazilla.findAll({ where: {uname: uname} })
        .then(data => {
            if(data.length > 0){
                bcrypt.compare(password,data[0].password,function(err, result) {
                    if(result== true){
                        req.session.type = "upazilla";
                        req.session.user_id = data[0].id;
                        const id=req.session.user_id;
                        // res.locals.type = req.session.type;
                        // res.locals.user_id = req.session.user_id;
                        console.log("session=", req.session.type,res.locals);
                        // const token=jwt.sign({id},process.env.JWT_SECRET,token{
                        //     expiresIn:process.env.JWT_EXPIRES_IN
                        // });
                        // console.log("the token is :"+)
                        res.redirect('/upazilla/dashboard');
                    }
                    else{
                        return res.status(200).render('upazilla/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
                    }
                });
            }else{
                return res.status(200).render('upazilla/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
            }
        })
        .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving tutorials."
              });
            });
        // upazilla.findAll({ where: {uname: uname} })
        // .then(data => {
        //     if(data.length > 0){
        //         bcrypt.compareSync(password , upazilla.password, function(err, result) {
        //             if(result== true){
        //                 res.redirect('/upazilla/dashboard');
        //             }
        //             else{
        //                 res.redirect('/upazilla/dashboard');
        //             }
        //         });
        //     }else{
        //         return res.status(200).render('upazilla/login', { title: 'Horticulture Wing Central Management Software',msg:'Please provide a username and password' });
        //     }
        // })
        // .catch(err => {
        //   res.status(500).send({
        //     message:
        //       err.message || "Some error occurred while retrieving tutorials."
        //   });
        // });

        
    }
    catch(error){
        console.log(error);
    } 
};
module.exports.upazillaDashboard = async(req,res) => {
    console.log("upazilladashboard",res.locals.type);
    try{
        upazillas=await upazilla.findOne({where: {id:req.session.user_id}});
        dds=await dd.findOne({where: {id:upazillas.dd_id}});
        res.render('upazilla/dashboard', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Welcome',records:upazillas,dds:dds });
    }
        catch{
            console.log(err);
        }
};
module.exports.upazillaEdit=async(req,res)=>{
    await upazilla.findByPk(req.params.id)
    .then(data => {
        res.render('upazilla/upazillaEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.upazillaEditPost=async(req,res)=>{
    var upazillas= req.body.upazilla;
    var officer= req.body.officer;
    var mobile= req.body.mobile;
    var uname= req.body.uname;
    var user_id =req.body.user_id;

    await upazilla.update({
        officer: officer,
        upazilla:upazillas,
        mobile:mobile,
        uname:uname,
    },
    {
        where: {id: req.params.id}
    })
        
        .then(data => {
            res.redirect('/upazilla/dashboard');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.upazillaPassword=async(req,res)=>{
    await upazilla.findByPk(req.params.id)
    .then(data => {
        res.render('upazilla/upazillaPassword', { title: 'পাসওয়ার্ড',msg:'' ,success:'',records:data,user_id: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.upazillaPasswordEditPost=async(req,res)=>{
    var password= req.body.password;
    var user_id =req.body.user_id;
    const hashedPassword = await bcrypt.hash(password, 10);
    await upazilla.update({
        password: hashedPassword,
    },
    {
        where: {id: req.params.id}
    })
        
        .then(data => {
            res.redirect('/upazilla/dashboard');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
//logIn controller end

//signUp controller
module.exports.upazillasignup=async(req,res)=>{
    await dd.findAll()
    .then(data => {
        console.log("inside");
        res.render('upazilla/signup', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'',records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/signup', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'',records: err });
    })
};
module.exports.upazillasignuppost=async(req,res)=>{
    try {
        const{dds,uname,upazillas,password,confirmPassword}=req.body;
        const ddata=await dd.findAll();
        const data = await upazilla.findAll({ where: {uname: uname} });
        
        if(data.length > 0){
            res.render('upazilla/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'ERROR: The upazilla is already enrolled!',records: ddata})
        }
        else if(password !== confirmPassword){
           res.render('upazilla/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'ERROR: Passwords do not match!',records: ddata})
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            try{
                const createupazilla = await upazilla.create({
                    uname: uname,
                    upazilla:upazillas,
                    password:hashedPassword,
                    dd_id:dds,
                    pd_id:1
                    })
                res.render('upazilla/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'upazilla Registered Successfully!',records: ddata})
            }
            catch (err) {
                console.log(err);
            }
            
        }
    }
    catch(error){
        console.log(error);
    } 
};
//signUp controller end

//trainedFarmer controller
module.exports.trainedFarmer=async(req,res)=>{
    await trainedFarmer.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })
     
    //  records:result

};
module.exports.trainedFarmerYear=async(req,res)=>{
    console.log("batch",req.body.batch);
    await trainedFarmer.findAll({
        where: {year: req.body.year,batch: req.body.batch,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/trainedFarmer/trainedFarmerTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.trainedFarmerForm=async(req,res)=>{
    res.render('upazilla/trainedFarmer/trainedFarmerForm', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.trainedFarmerFormPost=async(req,res)=>{
    var topic= req.body.topic;
    var target= req.body.target;
    var achieved= req.body.achieved;
    var name= req.body.name;
    var date= req.body.date;
    var finishDate= req.body.finishDate;
    var resource= req.body.resource;
    var feedback =req.body.feedback;
    var year =req.body.year;
    var batch =req.body.batch;
    var user_id =req.body.user_id;

    await trainedFarmer.create({
        topic:topic,
        target: target,
        achieved:achieved,
        name: name,
        date:date,
        finishDate:finishDate,
        resource:resource,
        feedback:feedback,
        batch:batch,
        year:year,
        upazilla_id:user_id
    })   
        
        .then(data => {
            res.redirect('/upazilla/trainedFarmer');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.trainedFarmerEdit=async(req,res)=>{
    await trainedFarmer.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/trainedFarmer/trainedFarmerFormEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside",err);
    })
};
module.exports.trainedFarmerFormEditPost=async(req,res)=>{
    var topic= req.body.topic;
    var target= req.body.target;
    var achieved= req.body.achieved;
    var name= req.body.name;
    var date= req.body.date;
    var finishDate= req.body.finishDate;
    var resource= req.body.resource;
    var feedback =req.body.feedback;
    var year =req.body.year;

    await trainedFarmer.update({
        topic:topic,
        target: target,
        achieved:achieved,
        name: name,
        date:date,
        finishDate:finishDate,
        resource:resource,
        feedback:feedback,
        year:year,
    },
    {
        where: {id: req.params.id}
    })  
        .then(data => {
            res.redirect('/upazilla/trainedFarmer');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.trainedFarmerDelete=async(req,res)=>{
    var trainedFarmerDelete = await trainedFarmer.findByPk(req.params.id);
    try {
        trainedFarmerDelete.destroy();
        res.redirect("/upazilla/trainedFarmer");
    }
    catch{
        console.log("outside",err);
    }
};
module.exports.generatePdftrainedFarmer = async (req, res) => {
    try {
      var upazillaName= await upazilla.findOne({
        where: { id: req.session.user_id },
      })
      console.log("year",req.body.year)
    var data= await trainedFarmer.findAll({
        where: {year: req.body.year,batch: req.body.batch,upazilla_id: req.session.user_id}
    })
        ejs.renderFile(
            path.join(__dirname, "../views/upazilla/trainedFarmer/", "pdf.ejs"),
            { records: data,upazillaNames:upazillaName,dirname: __dirname },
            (err, data) => {
              if (err) {
                console.log("error", err);
                res.send(err);
              } else {
                var assesPath = path.join(__dirname, "../public/");
                // console.log(assesPath);
                assesPath = assesPath.replace(new RegExp(/\\/g), "/");
  
                var options = {
                  height: "11.25in",
                  width: "18.5in",
                  header: {
                    height: "20mm",
                  },
                  footer: {
                    height: "20mm",
                  },
                  base: "file:///" + assesPath,
                };
                res.json({ html: data });
              }
            }
        )
      
      
    } catch (e) {
      console.log(e);
    }
  
  };
//trainedFarmer controller end

//saao controller
module.exports.saao=async(req,res)=>{
    await saao.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/saao/saao', { title: 'এসএএও প্রশিক্ষণ তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })
     
    //  records:result

};
module.exports.saaoYear=async(req,res)=>{
    await saao.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id,batch: req.body.batch}
    })
    .then(data => {
        res.render('upazilla/saao/saaoTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.saaoForm=async(req,res)=>{
    res.render('upazilla/saao/saaoForm', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.saaoFormPost=async(req,res)=>{
    var name= req.body.name;
    var vname= req.body.vname;
    var mnum= req.body.mnum;
    var nid= req.body.nid;
    var topic= req.body.topic;
    var date= req.body.date;
    var finishDate= req.body.finishDate;
    var batch =req.body.batch;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await saao.create({
        name: name,
        vname:vname,
        mnum:mnum,
        nid:nid,
        topic:topic,
        date:date,
        finishDate:finishDate,
        batch:batch,
        year:year,
        upazilla_id:user_id
    })    
        .then(data => {
            res.redirect('/upazilla/saao');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.saaoEdit=async(req,res)=>{
    await saao.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/saao/saaoFormEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside",err);
    })
};
module.exports.saaoFormEditPost=async(req,res)=>{
    var name= req.body.name;
    var vname= req.body.vname;
    var mnum= req.body.mnum;
    var nid= req.body.nid;
    var topic= req.body.topic;
    var date= req.body.date;
    var finishDate= req.body.finishDate;
    var card= req.body.card;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await saao.update({
        name: name,
        vname:vname,
        mnum:mnum,
        nid:nid,
        topic:topic,
        date:date,
        finishDate:finishDate,
        card:card,
        year:year
    },
    {
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/saao');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.saaoDelete=async(req,res)=>{
    var saaoDelete = await saao.findByPk(req.params.id);
    try {
        saaoDelete.destroy();
        res.redirect("/upazilla/saao");
    }
    catch{
        console.log("outside",err);
    }
};
//saao controller end

//initialTrial controller
module.exports.initialTrial=async(req,res)=>{
    await initialTrial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};

module.exports.initialTrialYear=async(req,res)=>{
    await initialTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/initialTrial/initialTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.initialTrialFormPost=async(req,res)=>{
    var breedname= req.body.breedname;
    var germinationRate= req.body.germinationRate;
    var trialdate= req.body.trialdate;
    var present= req.body.present;
    var kphone= req.body.kphone;

    await initialTrial.update(
        {
            breedname: breedname,
            germinationRate:germinationRate,
            trialdate:trialdate,
            present:present,
            kphone:kphone,
        },
        {
            where: {id: req.params.id}
        }
    );
    await finalTrial.update(
        {
            breedname: breedname,
            trialdate:trialdate,
        },
        {
            where: {id: req.params.id}
        }
    )
    
        
        .then(data => {
            res.redirect('/upazilla/initialTrial');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.initialTrialEdit=async(req,res)=>{
    await initialTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/initialTrial/initialTrialForm', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
    
};
//initialTrial controller end

//finalTrial controller
module.exports.finalTrial=async(req,res)=>{
    await finalTrial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};

module.exports.finalTrialYear=async(req,res)=>{
    await finalTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/finalTrial/finalTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};

module.exports.finalTrialForm=async(req,res)=>{
    res.render('upazilla/finalTrial/finalTrialForm', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',msg:'' ,success:'',user_id: req.session.user_id});
};

module.exports.finalTrialFormPost=async(req,res)=>{
    var cdate= req.body.cdate;
    var bij= req.body.bij;
    var production= req.body.production;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;

    await finalTrial.update({
        cdate: cdate,
        bij:bij,
        production:production,
        fcomment:fcomment,
        kcomment:kcomment,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/finalTrial');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.finalTrialEdit=async(req,res)=>{
    await finalTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/finalTrial/finalTrialForm', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};


//finalTrial controller end

//agriFair controller
module.exports.agriFair=async(req,res)=>{

        res.render('upazilla/agriFair/agriFair', { title: 'সেমিনার তথ্য',success:'' });

    //  records:result

};
module.exports.agriFairYear=async(req,res)=>{
    var year=req.body.year;
    var upazilla=req.session.user_id;
    await agriFair.findAll({
        where: {year:year, upazilla_id: upazilla,batch: req.body.batch}
    })
    .then(data => {
        console.log("inside,req.body.year,req.session.user_id",data,year,upazilla)
        res.render('upazilla/agriFair/agriFairTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.agriFairForm=async(req,res)=>{

    try{
    res.render('upazilla/agriFair/agriFairForm', { title: 'সেমিনারর তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
    }
    catch{
        console.log(err);
    }
};
module.exports.agriFairFormPost=async(req,res)=>{
    var topic= req.body.topic;
    var date= req.body.date;
    var name= req.body.name;
    var place= req.body.place;
    var mobile= req.body.mobile;
    var resource= req.body.resource;
    var comment= req.body.comment;
    var year =req.body.year;
    var batch =req.body.batch;

    var user_id =req.body.user_id;

    await agriFair.create({
        topic:topic,
        date:date,
        name:name,
        place:place,
        mobile:mobile,
        resource:resource,
        comment:comment,
        year:year,
        batch:batch,
        upazilla_id:user_id
    })
    
        
        .then(data => {
            res.redirect('/upazilla/agriFair');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.agriFairEdit=async(req,res)=>{
    await agriFair.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/agriFair/agriFairEdit', { title: 'মাঠ দিবস তথ্য',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/agriFair/agriFairEdit', { title: 'মাঠ দিবস তথ্য',msg:'' ,success:'', records: err });
    })
};
module.exports.agriFairEditPost=async(req,res)=>{
    var topic= req.body.topic;
    var date= req.body.date;
    var name= req.body.name;
    var place= req.body.place;
    var mobile= req.body.mobile;
    var resource= req.body.resource;
    var comment= req.body.comment;
    var year =req.body.year;
    var batch =req.body.batch;

    var user_id =req.body.user_id;

    await agriFair.update({
        topic:topic,
        date:date,
        name:name,
        place:place,
        mobile:mobile,
        resource:resource,
        comment:comment
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/agriFair');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.agriFairDelete=async(req,res)=>{
    var agriFairDelete = await agriFair.findByPk(req.params.id);
    try {
        agriFairDelete.destroy();
        res.redirect("/upazilla/agriFair");
    }
    catch{
        console.log("outside",err);
    }
};
//agriFair controller end

//fieldDay controller
module.exports.fieldDay=async(req,res)=>{
    await fieldDay.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/fieldDay/fieldDay', { title: 'মাঠ দিবস তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.fieldDayYear=async(req,res)=>{
    await fieldDay.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id,batch: req.body.batch}
    })
    .then(data => {
        res.render('upazilla/fieldDay/fieldDayTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.fieldDayForm=async(req,res)=>{
    res.render('upazilla/fieldDay/fieldDayForm', { title: 'মাঠ দিবস তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.fieldDayFormPost=async(req,res)=>{
    var name= req.body.name;
    var foshol= req.body.foshol;
    var date= req.body.date;
    var time= req.body.time;
    var comment= req.body.comment;
    var year =req.body.year;
    var batch =req.body.batch;

    var user_id =req.body.user_id;

    await fieldDay.create({
        name: name,
        foshol:foshol,
        date:date,
        time:time,
        comment:comment,
        year:year,
        batch:batch,
        upazilla_id:user_id
    })
    
        
        .then(data => {
            res.redirect('/upazilla/fieldDay');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.fieldDayEdit=async(req,res)=>{
    await fieldDay.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/fieldDay/fieldDayEdit', { title: 'মাঠ দিবস তথ্য',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.fieldDayEditPost=async(req,res)=>{
    var name= req.body.name;
    var foshol= req.body.foshol;
    var date= req.body.date;
    var time= req.body.time;
    var comment= req.body.comment;

    await fieldDay.update({
        name: name,
        foshol:foshol,
        date:date,
        time:time,
        comment:comment,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/fieldDay');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.fieldDayDelete=async(req,res)=>{
    var fieldDayDelete = await fieldDay.findByPk(req.params.id);
    try {
        fieldDayDelete.destroy();
        res.redirect("/upazilla/fieldDay");
    }
    catch{
        console.log("outside",err);
    }
};
//fieldDay controller end

//irrigation controller
module.exports.irrigation=async(req,res)=>{
    await irrigation.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/irrigation/irrigation', { title: 'জিরো এনার্জি কুল চেম্বার স্থাপন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.irrigationYear=async(req,res)=>{
    await irrigation.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/irrigation/irrigationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.irrigationForm=async(req,res)=>{
    try{
    res.render('upazilla/irrigation/irrigationForm', { title: 'জিরো এনার্জি কুল চেম্বার স্থাপন',msg:'' ,success:'',user_id: req.session.user_id});
    }
    catch{
        console.log(err);
    }
};
module.exports.irrigationFormPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await irrigation.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
        year:year,
        upazilla_id:user_id
    })
        .then(data => {
            res.redirect('/upazilla/irrigation');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.irrigationEdit=async(req,res)=>{
    await irrigation.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/irrigation/irrigationEdit', { title: 'জিরো এনার্জি কুল চেম্বার স্থাপন',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.irrigationEditPost=async(req,res)=>{
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await irrigation.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/irrigation');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.irrigationDelete=async(req,res)=>{
    var irrigationDelete = await irrigation.findByPk(req.params.id);
    try {
        irrigationDelete.destroy();
        res.redirect("/upazilla/irrigation");
    }
    catch{
        console.log("outside",err);
    }
};
//irrigation controller end

//machinery controller
module.exports.machinery=async(req,res)=>{
    await machinery.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/machinery/machinery', { title: 'ক্ষুদ্র কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.machineryYear=async(req,res)=>{
    await machinery.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/machinery/machineryTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.machineryForm=async(req,res)=>{
    try{
    res.render('upazilla/machinery/machineryForm', { title: 'ক্ষুদ্র কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন',msg:'' ,success:'',user_id: req.session.user_id});
    }
    catch{
        console.log(err);
    }
};
module.exports.machineryFormPost=async(req,res)=>{
    var machine= req.body.machine;
    var number= req.body.number;
    var shongothon= req.body.shongothon;
    var farmer= req.body.farmer;
    var village= req.body.village;
    var mobile= req.body.mobile;
    var bitoron= req.body.bitoron;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await machinery.create({
        machine:machine,
        number:number,
        shongothon:shongothon,
        farmer:farmer,
        village:village,
        mobile:mobile,
        bitoron:bitoron,
        year:year,
        upazilla_id:user_id
    })
    
        
        .then(data => {
            res.redirect('/upazilla/machinery');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.machineryEdit=async(req,res)=>{
    await machinery.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/machinery/machineryEdit', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.machineryEditPost=async(req,res)=>{
    var machine= req.body.machine;
    var number= req.body.number;
    var farmer= req.body.farmer;
    var village= req.body.village;
    var mobile= req.body.mobile;
    var bitoron= req.body.bitoron;

    await machinery.update({
        machine:machine,
        number:number,
        farmer:farmer,
        village:village,
        mobile:mobile,
        bitoron:bitoron,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/machinery');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.machineryDelete=async(req,res)=>{
    var machineryDelete = await machinery.findByPk(req.params.id);
    try {
        machineryDelete.destroy();
        res.redirect("/upazilla/machinery");
    }
    catch{
        console.log("outside",err);
    }
};
//machinery controller end

//motivation controller
module.exports.motivation=async(req,res)=>{
    await motivation.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/motivation/motivation', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.motivationYear=async(req,res)=>{
    await motivation.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id,batch: req.body.batch}
    })
    .then(data => {
        res.render('upazilla/motivation/motivationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.motivationForm=async(req,res)=>{
    try{
    res.render('upazilla/motivation/motivationForm', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',msg:'' ,success:'',user_id: req.session.user_id});
    }
    catch{
        console.log(err);
    }
};
module.exports.motivationFormPost=async(req,res)=>{
    var sdate= req.body.sdate;
    var fdate= req.body.fdate;
    var name= req.body.name;
    var nid= req.body.nid;
    var village= req.body.village;
    var mobile= req.body.mobile;
    var podobi= req.body.podobi;
    var bornona= req.body.bornona;
    var comment= req.body.comment;
    var year =req.body.year;
    var batch =req.body.batch;
    var user_id =req.body.user_id;

    await motivation.create({
        sdate: sdate,
        fdate:fdate,
        name:name,
        nid:nid,
        village:village,
        mobile:mobile,
        podobi:podobi,
        bornona:bornona,
        comment:comment,
        year:year,
        batch:batch,
        upazilla_id:user_id
    })
    
        
        .then(data => {
            res.redirect('/upazilla/motivation');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.motivationEdit=async(req,res)=>{
    await motivation.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/motivation/motivationEdit', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.motivationEditPost=async(req,res)=>{
    var sdate= req.body.sdate;
    var fdate= req.body.fdate;
    var name= req.body.name;
    var nid= req.body.nid;
    var village= req.body.village;
    var mobile= req.body.mobile;
    var podobi= req.body.podobi;
    var bornona= req.body.bornona;
    var comment= req.body.comment;
    var year =req.body.year;
    var batch =req.body.batch;
    var user_id =req.body.user_id;

    await motivation.update({
        sdate: sdate,
        fdate:fdate,
        name:name,
        nid:nid,
        village:village,
        mobile:mobile,
        podobi:podobi,
        bornona:bornona,
        comment:comment,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/upazilla/motivation');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.motivationDelete=async(req,res)=>{
    var motivationDelete = await motivation.findByPk(req.params.id);
    try {
        motivationDelete.destroy();
        res.redirect("/upazilla/motivation");
    }
    catch{
        console.log("outside",err);
    }
};
//motivation controller end
//vermiCompostInitial controller
module.exports.vermiCompostInitial=async(req,res)=>{
    await vermiCompostInitial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/vermiCompostInitial/vermiCompostInitial', { title: 'কমিউনিটি বেইজড ভার্মি কম্পোস্ট উৎপাদন পিট স্থাপন প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
    })
     
    //  records:result

};
module.exports.vermiCompostInitialYear=async(req,res)=>{
    await vermiCompostInitial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/vermiCompostInitial/vermiCompostInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err);
    })

};
module.exports.vermiCompostInitialForm=async(req,res)=>{
    res.render('upazilla/vermiCompostInitial/vermiCompostInitialForm', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.vermiCompostInitialFormPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await vermiCompostInitial.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id
    }),
    await vermiCompostFinal.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id
    })
        .then(data => {
            res.redirect('/upazilla/vermiCompostInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.vermiCompostInitialFormEdit=async(req,res)=>{
    await vermiCompostInitial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/vermiCompostInitial/vermiCompostInitialFormEdit', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/vermiCompostInitial/vermiCompostInitialFormEdit', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});

    })
};
module.exports.vermiCompostInitialFormEditPost=async(req,res)=>{
    var name= req.body.name;
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var user_id =req.body.user_id;

    await vermiCompostInitial.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    }),
    await vermiCompostFinal.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/vermiCompostInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.vermiCompostInitialDelete=async(req,res)=>{
    var vermiCompostInitialDelete = await vermiCompostInitial.findByPk(req.params.id);
    try {
        vermiCompostInitialDelete.destroy();
        res.redirect("/upazilla/vermiCompostInitial");
    }
    catch{
        res.render('errorpage',err);
    }
};
//vermiCompostInitial controller end

//vermiCompostFinal controller
module.exports.vermiCompostFinal=async(req,res)=>{
    await vermiCompostFinal.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/vermiCompostFinal/vermiCompostFinal', { title: 'কমিউনিটি বেইজড ভার্মি কম্পোস্ট উৎপাদন পিট স্থাপন প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/vermiCompostFinal/vermiCompostFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })
     
    //  records:result

};
module.exports.vermiCompostFinalYear=async(req,res)=>{
    await vermiCompostFinal.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/vermiCompostFinal/vermiCompostFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/vermiCompostFinal/vermiCompostFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',success:'', records: err });
    })

};
module.exports.vermiCompostFinalForm=async(req,res)=>{
    res.render('upazilla/vermiCompostFinal/vermiCompostFinalForm', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.vermiCompostFinalFormPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await vermiCompostFinal.create({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
        year:year,
        upazilla_id:user_id
    })
        .then(data => {
            res.redirect('/upazilla/vermiCompostFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.vermiCompostFinalFormEdit=async(req,res)=>{
    await vermiCompostFinal.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/vermiCompostFinal/vermiCompostFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/vermiCompostFinal/vermiCompostFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});
    })
};
module.exports.vermiCompostFinalFormEditPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await vermiCompostFinal.update({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/vermiCompostFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.vermiCompostFinalDelete=async(req,res)=>{
    var vermiCompostFinalDelete = await vermiCompostFinal.findByPk(req.params.id);
    try {
        vermiCompostFinalDelete.destroy();
        res.redirect("/upazilla/vermiCompostFinal");
    }
    catch{
        res.render('errorpage',err);
    }
};
//vermiCompostFinal controller end

//demonstrationInitial controller
module.exports.demonstrationInitial=async(req,res)=>{
    await demonstrationInitial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/demonstrationInitial/demonstrationInitial', { title: 'পারিবারিক সবজি ও পুষ্টি বাগান স্থাপন প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
    })
     
    //  records:result

};
module.exports.demonstrationInitialYear=async(req,res)=>{
    await demonstrationInitial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/demonstrationInitial/demonstrationInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err)
    })

};
module.exports.demonstrationInitialForm=async(req,res)=>{
    res.render('upazilla/demonstrationInitial/demonstrationInitialForm', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.demonstrationInitialFormPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await demonstrationInitial.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id
    }),
    await demonstrationFinal.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id})
        .then(data => {
            res.redirect('/upazilla/demonstrationInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.demonstrationInitialFormEdit=async(req,res)=>{
    await demonstrationInitial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/demonstrationInitial/demonstrationInitialFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/demonstrationInitial/demonstrationInitialFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});
    })
};
module.exports.demonstrationInitialFormEditPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var user_id =req.body.user_id;

    await demonstrationInitial.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    }),
    await demonstrationFinal.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/demonstrationInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.demonstrationInitialDelete=async(req,res)=>{
    var demonstrationInitialDelete = await demonstrationInitial.findByPk(req.params.id);
    try {
        demonstrationInitialDelete.destroy();
        res.redirect("/upazilla/demonstrationInitial");
    }
    catch{
        res.render('errorpage',err);
    }
};
//demonstrationInitial controller end

//demonstrationFinal controller
module.exports.demonstrationFinal=async(req,res)=>{
    await demonstrationFinal.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/demonstrationFinal/demonstrationFinal', { title: 'পারিবারিক সবজি ও পুষ্টি বাগান স্থাপন প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/demonstrationFinal/demonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })
     
    //  records:result

};
module.exports.demonstrationFinalYear=async(req,res)=>{
    await demonstrationFinal.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/demonstrationFinal/demonstrationFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/demonstrationFinal/demonstrationFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',success:'', records: err });
    })

};
module.exports.demonstrationFinalForm=async(req,res)=>{
    res.render('upazilla/demonstrationFinal/demonstrationFinalForm', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.demonstrationFinalFormPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await demonstrationFinal.create({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
        year:year,
        upazilla_id:user_id
    })
        .then(data => {
            res.redirect('/upazilla/demonstrationFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.demonstrationFinalFormEdit=async(req,res)=>{
    await demonstrationFinal.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/demonstrationFinal/demonstrationFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/demonstrationFinal/demonstrationFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});
    })
};
module.exports.demonstrationFinalFormEditPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await demonstrationFinal.update({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/demonstrationFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.demonstrationFinalDelete=async(req,res)=>{
    var demonstrationFinalDelete = await demonstrationFinal.findByPk(req.params.id);
    try {
        demonstrationFinalDelete.destroy();
        res.redirect("/upazilla/demonstrationFinal");
    }
    catch{
        res.render('errorpage',err);
    }
};
//demonstrationFinal controller end


//adademonstrationInitial controller
module.exports.adademonstrationInitial=async(req,res)=>{
    await adademonstrationInitial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/adademonstrationInitial/adademonstrationInitial', { title: 'ছায়াযুক্ত স্থান/বসতবাড়িতে আদা/হলুদ চাষ প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
    })
     
    //  records:result

};
module.exports.adademonstrationInitialYear=async(req,res)=>{
    await adademonstrationInitial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/adademonstrationInitial/adademonstrationInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err)
    })

};
module.exports.adademonstrationInitialForm=async(req,res)=>{
    res.render('upazilla/adademonstrationInitial/adademonstrationInitialForm', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.adademonstrationInitialFormPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await adademonstrationInitial.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id
    }),
    await adademonstrationFinal.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id})
        .then(data => {
            res.redirect('/upazilla/adademonstrationInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.adademonstrationInitialFormEdit=async(req,res)=>{
    await adademonstrationInitial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/adademonstrationInitial/adademonstrationInitialFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/adademonstrationInitial/adademonstrationInitialFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});
    })
};
module.exports.adademonstrationInitialFormEditPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var user_id =req.body.user_id;

    await adademonstrationInitial.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    }),
    await adademonstrationFinal.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/adademonstrationInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.adademonstrationInitialDelete=async(req,res)=>{
    var adademonstrationInitialDelete = await adademonstrationInitial.findByPk(req.params.id);
    try {
        adademonstrationInitialDelete.destroy();
        res.redirect("/upazilla/adademonstrationInitial");
    }
    catch{
        res.render('errorpage',err);
    }
};
module.exports.generatePdfadademonstrationInitial = async (req, res) => {
    try {
      var upazillaName= await upazilla.findOne({
        where: { id: req.session.user_id },
      })
    var data= await adademonstrationInitial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
        ejs.renderFile(
            path.join(__dirname, "../views/upazilla/adademonstrationInitial/", "pdf.ejs"),
            { records: data,upazillaNames:upazillaName,dirname: __dirname },
            (err, data) => {
              if (err) {
                console.log("error", err);
                res.send(err);
              } else {
                var assesPath = path.join(__dirname, "../public/");
                // console.log(assesPath);
                assesPath = assesPath.replace(new RegExp(/\\/g), "/");
  
                var options = {
                  height: "11.25in",
                  width: "18.5in",
                  header: {
                    height: "20mm",
                  },
                  footer: {
                    height: "20mm",
                  },
                  base: "file:///" + assesPath,
                };
                res.json({ html: data });
              }
            }
        )
      
      
    } catch (e) {
      console.log(e);
    }
  
  };
//adademonstrationInitial controller end

//adademonstrationFinal controller
module.exports.adademonstrationFinal=async(req,res)=>{
    await adademonstrationFinal.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/adademonstrationFinal/adademonstrationFinal', { title: 'ছায়াযুক্ত স্থান/বসতবাড়িতে আদা/হলুদ চাষ প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/adademonstrationFinal/adademonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })
     
    //  records:result

};
module.exports.adademonstrationFinalYear=async(req,res)=>{
    await adademonstrationFinal.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/adademonstrationFinal/adademonstrationFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/adademonstrationFinal/adademonstrationFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',success:'', records: err });
    })

};
module.exports.adademonstrationFinalForm=async(req,res)=>{
    res.render('upazilla/adademonstrationFinal/adademonstrationFinalForm', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.adademonstrationFinalFormPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await adademonstrationFinal.create({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
        year:year,
        upazilla_id:user_id
    })
        .then(data => {
            res.redirect('/upazilla/adademonstrationFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.adademonstrationFinalFormEdit=async(req,res)=>{
    await adademonstrationFinal.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/adademonstrationFinal/adademonstrationFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/adademonstrationFinal/adademonstrationFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});
    })
};
module.exports.adademonstrationFinalFormEditPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await adademonstrationFinal.update({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/adademonstrationFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.adademonstrationFinalDelete=async(req,res)=>{
    var adademonstrationFinalDelete = await adademonstrationFinal.findByPk(req.params.id);
    try {
        adademonstrationFinalDelete.destroy();
        res.redirect("/upazilla/adademonstrationFinal");
    }
    catch{
        res.render('errorpage',err);
    }
};
module.exports.generatePdfadademonstrationFinal = async (req, res) => {
    try {
      var upazillaName= await upazilla.findOne({
        where: { id: req.session.user_id },
      })
    var data= await adademonstrationFinal.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
        ejs.renderFile(
            path.join(__dirname, "../views/upazilla/adademonstrationFinal/", "pdf.ejs"),
            { records: data,upazillaNames:upazillaName,dirname: __dirname },
            (err, data) => {
              if (err) {
                console.log("error", err);
                res.send(err);
              } else {
                var assesPath = path.join(__dirname, "../public/");
                // console.log(assesPath);
                assesPath = assesPath.replace(new RegExp(/\\/g), "/");
  
                var options = {
                  height: "11.25in",
                  width: "18.5in",
                  header: {
                    height: "20mm",
                  },
                  footer: {
                    height: "20mm",
                  },
                  base: "file:///" + assesPath,
                };
                res.json({ html: data });
              }
            }
        )
      
      
    } catch (e) {
      console.log(e);
    }
  
  };
//adademonstrationFinal controller end

//kochudemonstrationInitial controller
module.exports.kochudemonstrationInitial=async(req,res)=>{
    await kochudemonstrationInitial.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/kochudemonstrationInitial/kochudemonstrationInitial', { title: 'স্যাঁতস্যাঁতে জমিতে কচু জাতীয় সবজি চাষ প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
    })
     
    //  records:result

};
module.exports.kochudemonstrationInitialYear=async(req,res)=>{
    await kochudemonstrationInitial.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/kochudemonstrationInitial/kochudemonstrationInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err)
    })

};
module.exports.kochudemonstrationInitialForm=async(req,res)=>{
    res.render('upazilla/kochudemonstrationInitial/kochudemonstrationInitialForm', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.kochudemonstrationInitialFormPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await kochudemonstrationInitial.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id
    }),
    await kochudemonstrationFinal.create({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
        year:year,
        upazilla_id:user_id})
        .then(data => {
            res.redirect('/upazilla/kochudemonstrationInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.kochudemonstrationInitialFormEdit=async(req,res)=>{
    await kochudemonstrationInitial.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/kochudemonstrationInitial/kochudemonstrationInitialFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/kochudemonstrationInitial/kochudemonstrationInitialFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});
    })
};
module.exports.kochudemonstrationInitialFormEditPost=async(req,res)=>{
    var pname= req.body.pname;
    var psize= req.body.psize;
    var target= req.body.target;
    var achieved=req.body.achieved;
    var name= req.body.name;
    var nid= req.body.nid;
    var saao= req.body.saao;
    var crop =req.body.crop;
    var date= req.body.date;
    var bij= req.body.bij;
    var uria =req.body.uria;
    var tsp=req.body.tsp;
    var mop= req.body.mop;
    var vermi= req.body.vermi;
    var other =req.body.other;
    var garden =req.body.garden;
    var water= req.body.water;
    var pot= req.body.pot;
    var cother= req.body.cother;
    var signboard=req.body.signboard;
    var bdate= req.body.bdate;
    var comment= req.body.comment;
    var user_id =req.body.user_id;

    await kochudemonstrationInitial.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    }),
    await kochudemonstrationFinal.update({
        pname:pname,
        psize:psize,
        target:target,
        achieved:achieved,
        name: name,
        nid:nid,
        saao:saao,
        crop:crop,
        date: date,
        bij:bij,
        uria:uria,
        tsp:tsp,
        mop:mop,
        vermi:vermi,
        other:other,
        garden:garden,
        water:water,
        pot:pot,
        cother:cother,
        signboard:signboard,
        bdate:bdate,
        comment:comment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/kochudemonstrationInitial');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.kochudemonstrationInitialDelete=async(req,res)=>{
    var kochudemonstrationInitialDelete = await kochudemonstrationInitial.findByPk(req.params.id);
    try {
        kochudemonstrationInitialDelete.destroy();
        res.redirect("/upazilla/kochudemonstrationInitial");
    }
    catch{
        res.render('errorpage',err);
    }
};
//kochudemonstrationInitial controller end

//kochudemonstrationFinal controller
module.exports.kochudemonstrationFinal=async(req,res)=>{
    await kochudemonstrationFinal.findAll({
        where: {upazilla_id: req.session.user_id}
    })
    .then(data => {
        console.log("inside");
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinal', { title: 'স্যাঁতস্যাঁতে জমিতে কচু জাতীয় সবজি চাষ প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'', records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })
     
    //  records:result

};
module.exports.kochudemonstrationFinalYear=async(req,res)=>{
    await kochudemonstrationFinal.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
    })
    .then(data => {
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',success:'', records: err });
    })

};
module.exports.kochudemonstrationFinalForm=async(req,res)=>{
    res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinalForm', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',user_id: req.session.user_id});
};
module.exports.kochudemonstrationFinalFormPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await kochudemonstrationFinal.create({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
        year:year,
        upazilla_id:user_id
    })
        .then(data => {
            res.redirect('/upazilla/kochudemonstrationFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
};
module.exports.kochudemonstrationFinalFormEdit=async(req,res)=>{
    await kochudemonstrationFinal.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:data,upazilla_id: req.session.user_id});
    })
    .catch(err => {
        console.log("outside");
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinalFormEdit', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন ফর্ম',msg:'' ,success:'',records:err});
    })
};
module.exports.kochudemonstrationFinalFormEditPost=async(req,res)=>{
    var sobjiDate= req.body.sobjiDate;
    var pfolon= req.body.pfolon;
    var hfolon= req.body.hfolon;
    var fcomment= req.body.fcomment;
    var kcomment= req.body.kcomment;
    var year =req.body.year;
    var user_id =req.body.user_id;

    await kochudemonstrationFinal.update({
        sobjiDate:sobjiDate,
        pfolon:pfolon,
        hfolon:hfolon,
        fcomment:fcomment,
        kcomment:kcomment,
    },
    {
        where: {id: req.params.id}
    })
       .then(data => {
            res.redirect('/upazilla/kochudemonstrationFinal');
        }).catch(err => {
            res.render('errorpage',err);
        });
  
  
};
module.exports.kochudemonstrationFinalDelete=async(req,res)=>{
    var kochudemonstrationFinalDelete = await kochudemonstrationFinal.findByPk(req.params.id);
    try {
        kochudemonstrationFinalDelete.destroy();
        res.redirect("/upazilla/kochudemonstrationFinal");
    }
    catch{
        res.render('errorpage',err);
    }
};
//kochudemonstrationFinal controller end


/////////Gallery and File Storage/////////


//agriFair Start
module.exports.agriFairGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await agriFairGallery.findAll();
        res.render('upazilla/agriFair/agriFairGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.agriFairGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/agriFairGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const agriFairGalleryPost = agriFairGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/agriFairGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.agriFairFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await agriFairFile.findAll();
        res.render('upazilla/agriFair/agriFairFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.agriFairFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/agriFairFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const agriFairFilePost = agriFairFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/agriFairFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///agriFair File and Gallery Finish

//adademonstrationFinal Start
module.exports.adademonstrationFinalGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await adademonstrationFinalGallery.findAll();
        res.render('upazilla/adademonstrationFinal/adademonstrationFinalGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.adademonstrationFinalGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/adademonstrationFinalGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const adademonstrationFinalGalleryPost = adademonstrationFinalGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/adademonstrationFinalGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.adademonstrationFinalFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await adademonstrationFinalFile.findAll();
        res.render('upazilla/adademonstrationFinal/adademonstrationFinalFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.adademonstrationFinalFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/adademonstrationFinalFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const adademonstrationFinalFilePost = adademonstrationFinalFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/adademonstrationFinalFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///adademonstrationFinal File and Gallery Finish

//adademonstrationInitial Start
module.exports.adademonstrationInitialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await adademonstrationInitialGallery.findAll();
        res.render('upazilla/adademonstrationInitial/adademonstrationInitialGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.adademonstrationInitialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/adademonstrationInitialGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const adademonstrationInitialGalleryPost = adademonstrationInitialGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/adademonstrationInitialGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.adademonstrationInitialFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await adademonstrationInitialFile.findAll();
        res.render('upazilla/adademonstrationInitial/adademonstrationInitialFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.adademonstrationInitialFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/adademonstrationInitialFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const adademonstrationInitialFilePost = adademonstrationInitialFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/adademonstrationInitialFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///adademonstrationInitial File and Gallery Finish

//demonstrationFinal Start
module.exports.demonstrationFinalGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await demonstrationFinalGallery.findAll();
        res.render('upazilla/demonstrationFinal/demonstrationFinalGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.demonstrationFinalGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/demonstrationFinalGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const demonstrationFinalGalleryPost = demonstrationFinalGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/demonstrationFinalGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.demonstrationFinalFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await demonstrationFinalFile.findAll();
        res.render('upazilla/demonstrationFinal/demonstrationFinalFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.demonstrationFinalFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/demonstrationFinalFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const demonstrationFinalFilePost = demonstrationFinalFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/demonstrationFinalFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///demonstrationFinal File and Gallery Finish



//demonstrationInitial Start
module.exports.demonstrationInitialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await demonstrationInitialGallery.findAll();
        res.render('upazilla/demonstrationInitial/demonstrationInitialGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.demonstrationInitialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/demonstrationInitialGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const demonstrationInitialGalleryPost = demonstrationInitialGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/demonstrationInitialGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.demonstrationInitialFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await demonstrationInitialFile.findAll();
        res.render('upazilla/demonstrationInitial/demonstrationInitialFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.demonstrationInitialFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/demonstrationInitialFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const demonstrationInitialFilePost = demonstrationInitialFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/demonstrationInitialFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///demonstrationInitial File and Gallery Finish

//fieldDay Start
module.exports.fieldDayGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await fieldDayGallery.findAll();
        res.render('upazilla/fieldDay/fieldDayGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.fieldDayGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/fieldDayGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const fieldDayGalleryPost = fieldDayGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/fieldDayGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.fieldDayFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await fieldDayFile.findAll();
        res.render('upazilla/fieldDay/fieldDayFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.fieldDayFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/fieldDayFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const fieldDayFilePost = fieldDayFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/fieldDayFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///fieldDay File and Gallery Finish

//irrigation Start
module.exports.irrigationGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await irrigationGallery.findAll();
        res.render('upazilla/irrigation/irrigationGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.irrigationGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/irrigationGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const irrigationGalleryPost = irrigationGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/irrigationGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.irrigationFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await irrigationFile.findAll();
        res.render('upazilla/irrigation/irrigationFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.irrigationFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/irrigationFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const irrigationFilePost = irrigationFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/irrigationFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///irrigation File and Gallery Finish

//kochudemonstrationFinal Start
module.exports.kochudemonstrationFinalGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await kochudemonstrationFinalGallery.findAll();
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinalGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.kochudemonstrationFinalGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/kochudemonstrationFinalGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const kochudemonstrationFinalGalleryPost = kochudemonstrationFinalGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/kochudemonstrationFinalGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.kochudemonstrationFinalFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await kochudemonstrationFinalFile.findAll();
        res.render('upazilla/kochudemonstrationFinal/kochudemonstrationFinalFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.kochudemonstrationFinalFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/kochudemonstrationFinalFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const kochudemonstrationFinalFilePost = kochudemonstrationFinalFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/kochudemonstrationFinalFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///kochudemonstrationFinal File and Gallery Finish
//kochudemonstrationInitial Start
module.exports.kochudemonstrationInitialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await kochudemonstrationInitialGallery.findAll();
        res.render('upazilla/kochudemonstrationInitial/kochudemonstrationInitialGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.kochudemonstrationInitialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/kochudemonstrationInitialGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const kochudemonstrationInitialGalleryPost = kochudemonstrationInitialGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/kochudemonstrationInitialGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.kochudemonstrationInitialFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await kochudemonstrationInitialFile.findAll();
        res.render('upazilla/kochudemonstrationInitial/kochudemonstrationInitialFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.kochudemonstrationInitialFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/kochudemonstrationInitialFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const kochudemonstrationInitialFilePost = kochudemonstrationInitialFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/kochudemonstrationInitialFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///kochudemonstrationInitial File and Gallery Finish

//machinery Start
module.exports.machineryGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await machineryGallery.findAll();
        res.render('upazilla/machinery/machineryGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.machineryGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/machineryGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const machineryGalleryPost = machineryGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/machineryGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.machineryFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await machineryFile.findAll();
        res.render('upazilla/machinery/machineryFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.machineryFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/machineryFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const machineryFilePost = machineryFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/machineryFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///machinery File and Gallery Finish

//motivation Start
module.exports.motivationGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await motivationGallery.findAll();
        res.render('upazilla/motivation/motivationGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.motivationGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/motivationGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const motivationGalleryPost = motivationGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/motivationGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.motivationFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await motivationFile.findAll();
        res.render('upazilla/motivation/motivationFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.motivationFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/motivationFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const motivationFilePost = motivationFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/motivationFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///motivation File and Gallery Finish

//saao Start
module.exports.saaoGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await saaoGallery.findAll();
        res.render('upazilla/saao/saaoGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.saaoGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/saaoGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const saaoGalleryPost = saaoGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/saaoGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.saaoFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await saaoFile.findAll();
        res.render('upazilla/saao/saaoFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.saaoFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/saaoFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const saaoFilePost = saaoFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/saaoFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///saao File and Gallery Finish

//trainedFarmer Start
module.exports.trainedFarmerGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await trainedFarmerGallery.findAll();
        res.render('upazilla/trainedFarmer/trainedFarmerGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.trainedFarmerGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/trainedFarmerGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const trainedFarmerGalleryPost = trainedFarmerGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/trainedFarmerGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.trainedFarmerFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await trainedFarmerFile.findAll();
        res.render('upazilla/trainedFarmer/trainedFarmerFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.trainedFarmerFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/trainedFarmerFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const trainedFarmerFilePost = trainedFarmerFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/trainedFarmerFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///trainedFarmer File and Gallery Finish

//vermiCompostFinal Start
module.exports.vermiCompostFinalGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await vermiCompostFinalGallery.findAll();
        res.render('upazilla/vermiCompostFinal/vermiCompostFinalGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.vermiCompostFinalGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/vermiCompostFinalGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const vermiCompostFinalGalleryPost = vermiCompostFinalGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/vermiCompostFinalGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.vermiCompostFinalFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await vermiCompostFinalFile.findAll();
        res.render('upazilla/vermiCompostFinal/vermiCompostFinalFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.vermiCompostFinalFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/vermiCompostFinalFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const vermiCompostFinalFilePost = vermiCompostFinalFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/vermiCompostFinalFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
///vermiCompostFinal File and Gallery Finish

//vermiCompostInitial Start
module.exports.vermiCompostInitialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await vermiCompostInitialGallery.findAll();
        res.render('upazilla/vermiCompostInitial/vermiCompostInitialGallery', { title: 'সেমিনার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.vermiCompostInitialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/vermiCompostInitialGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const vermiCompostInitialGalleryPost = vermiCompostInitialGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/vermiCompostInitialGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.vermiCompostInitialFile=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await vermiCompostInitialFile.findAll();
        res.render('upazilla/vermiCompostInitial/vermiCompostInitialFile', { title: 'সেমিনার ফাইল বোর্ড',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.vermiCompostInitialFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/vermiCompostInitialFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const vermiCompostInitialFilePost = vermiCompostInitialFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/vermiCompostInitialFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};

module.exports.upazillaFile=async(req,res)=>{
    await upazilla.findByPk(req.params.id)
    .then(data => {
        res.render('upazilla/upazillaFile', { title: 'ফাইল বোর্ড',msg:'' ,success:'',records: req.session.user_id});
    })
    .catch(err => {
        console.log("err");
    })
};
module.exports.upazillaFilePost=async(req,res)=>{
    const path = req.file && req.file.path;
    const {title} = req.body;
    if(path){

      try{
        var imagePath = "/upazillaFile/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const upazillaFilePost = upazillaFile.create({
            title:title,
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })     
        res.redirect('/upazilla/upazillaFile');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
//vermiCompostInitial File and Gallery Finish