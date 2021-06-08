const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();
const {ddsignup,ddsignuppost,allupazilla,ddlogin,ddloginpost,ddDashboard,irrigationEdit,irrigationEditPost,machineryEdit,machineryEditPost,motivationEdit,motivationEditPost,fieldDayEdit,fieldDayEditPost
    ,initialTrialEdit,initialTrialEditPost,finalTrialEdit,finalTrialEditPost,agriFairEdit,agriFairEditPost,
    trainedFarmer,trainedFarmerFilter,trainedFarmerEditPost,trainedFarmerEdit,initialTrial,initialTrialFilter,
    vermiCompostInitial,vermiCompostInitialFilter,vermiCompostFinal,vermiCompostFinalFilter,
    demonstrationInitial,demonstrationInitialFilter,demonstrationFinal,demonstrationFinalFilter,
    adademonstrationInitial,adademonstrationInitialFilter,adademonstrationFinal,adademonstrationFinalFilter,
    kochudemonstrationInitial,kochudemonstrationInitialFilter,kochudemonstrationFinal,kochudemonstrationFinalFilter,
    saao,saaoFilter,saaoEditPost,saaoEdit,
    finalTrial,finalTrialFilter,agriFair,agriFairFilter,irrigation,irrigationFilter,machinery,machineryFilter,motivation,motivationFilter,fieldDay,fieldDayFilter} = require('../controllers/dd.controller');
router.get('/',allupazilla);
router.get('/login',ddlogin);
router.post('/logins',ddloginpost);
router.get('/dashboard',ddDashboard);

router.get('/signup',ddsignup);
router.post('/signups',ddsignuppost);

router.get('/saao',saao);
router.post('/saaoFilter',saaoFilter);
router.get('/saaoEdit/:id',saaoEdit);
router.post('/saaoEditPost/:id',saaoEditPost);

router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerFilter',trainedFarmerFilter);
router.get('/trainedFarmerEdit/:id',trainedFarmerEdit);
router.post('/trainedFarmerEditPost/:id',trainedFarmerEditPost);

router.get('/initialTrial',initialTrial);
router.post('/initialTrialFilter',initialTrialFilter);
router.get('/initialTrialEdit/:id',initialTrialEdit);
router.post('/initialTrialEditPost/:id',initialTrialEditPost);

router.get('/finalTrial',finalTrial);
router.post('/finalTrialFilter',finalTrialFilter);
router.get('/finalTrialEdit/:id',finalTrialEdit);
router.post('/finalTrialEditPost/:id',finalTrialEditPost);

router.get('/agriFair',agriFair);
router.post('/agriFairFilter',agriFairFilter);
router.get('/agriFairEdit/:id',agriFairEdit);
router.post('/agriFairEditPost/:id',agriFairEditPost);

router.get('/irrigation',irrigation);
router.post('/irrigationFilter',irrigationFilter);
router.get('/irrigationEdit/:id',irrigationEdit);
router.post('/irrigationEditPost/:id',irrigationEditPost);

router.get('/machinery',machinery);
router.post('/machineryFilter',machineryFilter);
router.get('/machineryEdit/:id',machineryEdit);
router.post('/machineryEditPost/:id',machineryEditPost);

router.get('/motivation',motivation);
router.post('/motivationFilter',motivationFilter);
router.get('/motivationEdit/:id',motivationEdit);
router.post('/motivationEditPost/:id',motivationEditPost);

router.get('/fieldDay',fieldDay);
router.post('/fieldDayFilter',fieldDayFilter);
router.get('/fieldDayEdit/:id',fieldDayEdit);
router.post('/fieldDayEditPost/:id',fieldDayEditPost);

router.get('/vermiCompostInitial',vermiCompostInitial);
router.post('/vermiCompostInitialFilter',vermiCompostInitialFilter);

router.get('/vermiCompostFinal',vermiCompostFinal);
router.post('/vermiCompostFinalFilter',vermiCompostFinalFilter);


router.get('/demonstrationInitial',demonstrationInitial);
router.post('/demonstrationInitialFilter',demonstrationInitialFilter);

router.get('/demonstrationFinal',demonstrationFinal);
router.post('/demonstrationFinalFilter',demonstrationFinalFilter);

router.get('/kochudemonstrationInitial',kochudemonstrationInitial);
router.post('/kochudemonstrationInitialFilter',kochudemonstrationInitialFilter);

router.get('/kochudemonstrationFinal',kochudemonstrationFinal);
router.post('/kochudemonstrationFinalFilter',kochudemonstrationFinalFilter);

router.get('/adademonstrationInitial',adademonstrationInitial);
router.post('/adademonstrationInitialFilter',adademonstrationInitialFilter);

router.get('/adademonstrationFinal',adademonstrationFinal);
router.post('/adademonstrationFinalFilter',adademonstrationFinalFilter);



module.exports = router;