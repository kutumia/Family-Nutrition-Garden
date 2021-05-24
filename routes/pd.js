const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {pdsignup,pdsignuppost,pdlogin,pdloginpost,pdDashboard,trainedFarmerEditPost,trainedFarmerEdit,
    trainedFarmer,trainedFarmerFilter,initialTrial,initialTrialFilter,irrigationEdit,irrigationEditPost,machineryEdit,machineryEditPost,motivationEdit,motivationEditPost,fieldDayEdit,fieldDayEditPost
,initialTrialEdit,initialTrialEditPost,finalTrialEdit,finalTrialEditPost,agriFairEdit,agriFairEditPost,
    finalTrial,finalTrialFilter,trainedFarmerDistrictFilter,finalTrialDistrictFilter,initialTrialDistrictFilter,
    agriFair,agriFairFilter,irrigation,irrigationFilter,machinery,machineryFilter,motivation,motivationFilter,fieldDay,fieldDayFilter,
    agriFairDistrictFilter,irrigationDistrictFilter,machineryDistrictFilter,motivationDistrictFilter,fieldDayDistrictFilter,
    vermiCompostInitial,vermiCompostInitialFilter,vermiCompostInitialDistrictFilter,
    vermiCompostFinal,vermiCompostFinalFilter,vermiCompostFinalDistrictFilter,   demonstrationInitial,demonstrationInitialFilter,demonstrationInitialDistrictFilter,
    demonstrationFinal,demonstrationFinalFilter,demonstrationFinalDistrictFilter,
    
} = require('../controllers/pd.controller');
router.get('/login',pdlogin);
router.post('/logins',pdloginpost);
router.get('/dashboard',pdDashboard);


router.get('/signup',pdsignup);
router.post('/signups',pdsignuppost);

router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerFilter',trainedFarmerFilter);
router.post('/trainedFarmerDistrictFilter',trainedFarmerDistrictFilter);
router.get('/trainedFarmerEdit/:id',trainedFarmerEdit);
router.post('/trainedFarmerEditPost/:id',trainedFarmerEditPost);


router.get('/initialTrial',initialTrial);
router.post('/initialTrialFilter',initialTrialFilter);
router.post('/initialTrialDistrictFilter',initialTrialDistrictFilter);
router.get('/initialTrialEdit/:id',initialTrialEdit);
router.post('/initialTrialEditPost/:id',initialTrialEditPost);

router.get('/finalTrial',finalTrial);
router.post('/finalTrialFilter',finalTrialFilter);
router.post('/finalTrialDistrictFilter',finalTrialDistrictFilter);
router.get('/finalTrialEdit/:id',finalTrialEdit);
router.post('/finalTrialEditPost/:id',finalTrialEditPost);

router.get('/agriFair',agriFair);
router.post('/agriFairFilter',agriFairFilter);
router.post('/agriFairDistrictFilter',agriFairDistrictFilter);
router.get('/agriFairEdit/:id',agriFairEdit);
router.post('/agriFairEditPost/:id',agriFairEditPost);

router.get('/irrigation',irrigation);
router.post('/irrigationFilter',irrigationFilter);
router.post('/irrigationDistrictFilter',irrigationDistrictFilter);
router.get('/irrigationEdit/:id',irrigationEdit);
router.post('/irrigationEditPost/:id',irrigationEditPost);

router.get('/machinery',machinery);
router.post('/machineryFilter',machineryFilter);
router.post('/machineryDistrictFilter',machineryDistrictFilter);
router.get('/machineryEdit/:id',machineryEdit);
router.post('/machineryEditPost/:id',machineryEditPost);


router.get('/motivation',motivation);
router.post('/motivationFilter',motivationFilter);
router.post('/motivationDistrictFilter',motivationDistrictFilter);
router.get('/motivationEdit/:id',motivationEdit);
router.post('/motivationEditPost/:id',motivationEditPost);

router.get('/fieldDay',fieldDay);
router.post('/fieldDayFilter',fieldDayFilter);
router.post('/fieldDayDistrictFilter',fieldDayDistrictFilter);
router.get('/fieldDayEdit/:id',fieldDayEdit);
router.post('/fieldDayEditPost/:id',fieldDayEditPost);

router.get('/vermiCompostInitial',vermiCompostInitial);
router.post('/vermiCompostInitialFilter',vermiCompostInitialFilter);
router.post('/vermiCompostInitialDistrictFilter',vermiCompostInitialDistrictFilter);

router.get('/vermiCompostFinal',vermiCompostFinal);
router.post('/vermiCompostFinalFilter',vermiCompostFinalFilter);
router.post('/vermiCompostFinalDistrictFilter',vermiCompostFinalDistrictFilter);

router.get('/demonstrationInitial',demonstrationInitial);
router.post('/demonstrationInitialFilter',demonstrationInitialFilter);
router.post('/demonstrationInitialDistrictFilter',demonstrationInitialDistrictFilter);

router.get('/demonstrationFinal',demonstrationFinal);
router.post('/demonstrationFinalFilter',demonstrationFinalFilter);
router.post('/demonstrationFinalDistrictFilter',demonstrationFinalDistrictFilter);
module.exports = router;