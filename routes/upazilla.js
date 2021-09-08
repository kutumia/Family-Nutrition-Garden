const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {fieldDayYear,agriFair,agriFairYear,agriFairForm,agriFairFormPost,agriFairGallery,uploadagriFair,agriFairGalleryPost,
    agriFairFile,uploadagriFairFile,agriFairFilePost,
    fieldDayForm,fieldDayFormPost,upazillasignup,upazillasignuppost,upazillalogin,upazillaloginpost,upazillaDashboard,
    initialTrial,initialTrialYear,initialTrialFormPost,
    finalTrial,finalTrialYear,finalTrialForm,finalTrialFormPost,agriFairEdit,agriFairDelete,fieldDayEditPost,machineryEditPost,
    trainedFarmer,trainedFarmerYear,trainedFarmerForm,trainedFarmerFormPost,trainedFarmerEdit,trainedFarmerFormEditPost,trainedFarmerDelete,generatePdftrainedFarmer,initialTrialEdit,finalTrialEdit,agriFairEditPost,
    fieldDay,fieldDayEdit,fieldDayDelete,irrigation,irrigationYear,irrigationForm,irrigationFormPost,irrigationEdit,irrigationDelete,
machinery,machineryYear,machineryForm,machineryFormPost,machineryEdit,machineryDelete,irrigationEditPost,motivationEditPost,
motivation,motivationYear,motivationForm,motivationFormPost,motivationEdit,motivationDelete,
vermiCompostInitial,vermiCompostInitialYear,vermiCompostInitialForm,vermiCompostInitialFormPost,
    vermiCompostInitialFormEdit,vermiCompostInitialDelete,vermiCompostInitialFormEditPost,
    vermiCompostFinal,vermiCompostFinalYear,vermiCompostFinalForm,vermiCompostFinalFormPost,
    vermiCompostFinalFormEdit,vermiCompostFinalDelete,vermiCompostFinalFormEditPost,
    demonstrationInitial,demonstrationInitialYear,demonstrationInitialForm,demonstrationInitialFormPost,
    demonstrationInitialFormEdit,demonstrationInitialDelete,demonstrationInitialFormEditPost,
    demonstrationFinal,demonstrationFinalYear,demonstrationFinalForm,demonstrationFinalFormPost,
    demonstrationFinalFormEdit,demonstrationFinalDelete,demonstrationFinalFormEditPost,generatePdfadademonstrationInitial,generatePdfadademonstrationFinal,

    adademonstrationInitial,adademonstrationInitialYear,adademonstrationInitialForm,adademonstrationInitialFormPost,
    adademonstrationInitialFormEdit,adademonstrationInitialDelete,adademonstrationInitialFormEditPost,
    adademonstrationFinal,adademonstrationFinalYear,adademonstrationFinalForm,adademonstrationFinalFormPost,
    adademonstrationFinalFormEdit,adademonstrationFinalDelete,adademonstrationFinalFormEditPost,

    kochudemonstrationInitial,kochudemonstrationInitialYear,kochudemonstrationInitialForm,kochudemonstrationInitialFormPost,
    kochudemonstrationInitialFormEdit,kochudemonstrationInitialDelete,kochudemonstrationInitialFormEditPost,
    kochudemonstrationFinal,kochudemonstrationFinalYear,kochudemonstrationFinalForm,kochudemonstrationFinalFormPost,
    kochudemonstrationFinalFormEdit,kochudemonstrationFinalDelete,kochudemonstrationFinalFormEditPost,

    saao,saaoYear,saaoForm,saaoFormPost,saaoEdit,saaoDelete,saaoFormEditPost,

    trainedFarmerGallery,uploadtrainedFarmer,trainedFarmerGalleryPost,
    trainedFarmerFile,uploadtrainedFarmerFile,trainedFarmerFilePost,

    saaoGallery,uploadsaao,saaoGalleryPost,
    saaoFile,uploadsaaoFile,saaoFilePost,

    irrigationGallery,uploadirrigation,irrigationGalleryPost,
    irrigationFile,uploadirrigationFile,irrigationFilePost,

    machineryGallery,uploadmachinery,machineryGalleryPost,
    machineryFile,uploadmachineryFile,machineryFilePost,

    motivationGallery,uploadmotivation,motivationGalleryPost,
    motivationFile,uploadmotivationFile,motivationFilePost,

    fieldDayGallery,uploadfieldDay,fieldDayGalleryPost,
    fieldDayFile,uploadfieldDayFile,fieldDayFilePost,

    vermiCompostInitialGallery,uploadvermiCompostInitial,vermiCompostInitialGalleryPost,
    vermiCompostInitialFile,uploadvermiCompostInitialFile,vermiCompostInitialFilePost,

    vermiCompostFinalGallery,uploadvermiCompostFinal,vermiCompostFinalGalleryPost,
    vermiCompostFinalFile,uploadvermiCompostFinalFile,vermiCompostFinalFilePost,

    demonstrationInitialGallery,uploaddemonstrationInitial,demonstrationInitialGalleryPost,
    demonstrationInitialFile,uploaddemonstrationInitialFile,demonstrationInitialFilePost,

    demonstrationFinalGallery,uploaddemonstrationFinal,demonstrationFinalGalleryPost,
    demonstrationFinalFile,uploaddemonstrationFinalFile,demonstrationFinalFilePost,

    kochudemonstrationInitialGallery,uploadkochudemonstrationInitial,kochudemonstrationInitialGalleryPost,
    kochudemonstrationInitialFile,uploadkochudemonstrationInitialFile,kochudemonstrationInitialFilePost,

    kochudemonstrationFinalGallery,uploadkochudemonstrationFinal,kochudemonstrationFinalGalleryPost,
    kochudemonstrationFinalFile,uploadkochudemonstrationFinalFile,kochudemonstrationFinalFilePost,

    adademonstrationInitialGallery,uploadadademonstrationInitial,adademonstrationInitialGalleryPost,
    adademonstrationInitialFile,uploadadademonstrationInitialFile,adademonstrationInitialFilePost,

    adademonstrationFinalGallery,uploadadademonstrationFinal,adademonstrationFinalGalleryPost,
    adademonstrationFinalFile,uploadadademonstrationFinalFile,adademonstrationFinalFilePost,upazillaFile,upazillaEdit,upazillaPassword,upazillaFilePost,upazillaEditPost,upazillaPasswordEditPost
    
} = require('../controllers/upazilla.controller');

router.get('/login',upazillalogin);
router.post('/logins',upazillaloginpost);
router.get('/dashboard',upazillaDashboard);

router.get('/signup',upazillasignup);
router.post('/signups',upazillasignuppost);
router.get('/upazillaFile/:id',upazillaFile);
router.get('/upazillaEdit/:id',upazillaEdit);
router.get('/upazillaPassword/:id',upazillaPassword);
router.post('/upazillaFilePost/:id',upazillaFilePost);
router.post('/upazillaEditPost/:id',upazillaEditPost);
router.post('/upazillaPasswordEditPost/:id',upazillaPasswordEditPost);


router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerYear',trainedFarmerYear);
router.get('/trainedFarmerForm',trainedFarmerForm);
router.post('/trainedFarmerFormPost',trainedFarmerFormPost);
router.get('/trainedFarmerEdit/:id',trainedFarmerEdit);
router.post('/trainedFarmerFormEditPost/:id',trainedFarmerFormEditPost);
router.get('/trainedFarmerDelete/:id',trainedFarmerDelete);
router.post('/generatePdftrainedFarmer',generatePdftrainedFarmer);


router.get('/saao',saao);
router.post('/saaoYear',saaoYear);
router.get('/saaoForm',saaoForm);
router.post('/saaoFormPost',saaoFormPost);
router.get('/saaoEdit/:id',saaoEdit);
router.post('/saaoFormEditPost/:id',saaoFormEditPost);
router.get('/saaoDelete/:id',saaoDelete);

router.get('/initialTrial',initialTrial);
router.post('/initialTrialYear',initialTrialYear);
router.post('/initialTrialFormPost/:id',initialTrialFormPost);
router.get('/initialTrialEdit/:id',initialTrialEdit);

router.get('/finalTrial',finalTrial);
router.post('/finalTrialYear',finalTrialYear);
router.get('/finalTrialForm',finalTrialForm);
router.post('/finalTrialFormPost/:id',finalTrialFormPost);
router.get('/finalTrialEdit/:id',finalTrialEdit);

router.get('/agriFair',agriFair);
router.post('/agriFairYear',agriFairYear);
router.get('/agriFairForm',agriFairForm);
router.post('/agriFairFormPost',agriFairFormPost);
router.get('/agriFairEdit/:id',agriFairEdit);
router.post('/agriFairEditPost/:id',agriFairEditPost);
router.get('/agriFairDelete/:id',agriFairDelete);
router.get("/agriFairGallery", agriFairGallery);
router.post("/agriFairGalleryPost", uploadagriFair, agriFairGalleryPost);
router.get("/agriFairFile", agriFairFile);
router.post("/agriFairFilePost", uploadagriFairFile, agriFairFilePost);

router.get('/fieldDay',fieldDay);
router.post('/fieldDayYear',fieldDayYear);
router.get('/fieldDayForm',fieldDayForm);
router.post('/fieldDayFormPost',fieldDayFormPost);
router.get('/fieldDayEdit/:id',fieldDayEdit);
router.post('/fieldDayEditPost/:id',fieldDayEditPost);
router.get('/fieldDayDelete/:id',fieldDayDelete);

router.get('/irrigation',irrigation);
router.post('/irrigationYear',irrigationYear);
router.get('/irrigationForm',irrigationForm);
router.post('/irrigationFormPost',irrigationFormPost);
router.get('/irrigationEdit/:id',irrigationEdit);
router.post('/irrigationEditPost/:id',irrigationEditPost);
router.get('/irrigationDelete/:id',irrigationDelete);

router.get('/machinery',machinery);
router.post('/machineryYear',machineryYear);
router.get('/machineryForm',machineryForm);
router.post('/machineryFormPost',machineryFormPost);
router.get('/machineryEdit/:id',machineryEdit);
router.post('/machineryEditPost/:id',machineryEditPost);
router.get('/machineryDelete/:id',machineryDelete);

router.get('/motivation',motivation);
router.post('/motivationYear',motivationYear);
router.get('/motivationForm',motivationForm);
router.post('/motivationFormPost',motivationFormPost);
router.get('/motivationEdit/:id',motivationEdit);
router.post('/motivationEditPost/:id',motivationEditPost);
router.get('/motivationDelete/:id',motivationDelete);

router.get('/vermiCompostInitial',vermiCompostInitial);
router.post('/vermiCompostInitialYear',vermiCompostInitialYear);
router.get('/vermiCompostInitialForm',vermiCompostInitialForm);
router.post('/vermiCompostInitialFormPost',vermiCompostInitialFormPost);
router.get('/vermiCompostInitialFormEdit/:id',vermiCompostInitialFormEdit);
router.post('/vermiCompostInitialFormEditPost/:id',vermiCompostInitialFormEditPost);
router.get('/vermiCompostInitialDelete/:id',vermiCompostInitialDelete);

router.get('/vermiCompostFinal',vermiCompostFinal);
router.post('/vermiCompostFinalYear',vermiCompostFinalYear);
router.get('/vermiCompostFinalForm',vermiCompostFinalForm);
router.post('/vermiCompostFinalFormPost',vermiCompostFinalFormPost);
router.get('/vermiCompostFinalFormEdit/:id',vermiCompostFinalFormEdit);
router.post('/vermiCompostFinalFormEditPost/:id',vermiCompostFinalFormEditPost);
router.get('/vermiCompostFinalDelete/:id',vermiCompostFinalDelete);

router.get('/demonstrationInitial',demonstrationInitial);
router.post('/demonstrationInitialYear',demonstrationInitialYear);
router.get('/demonstrationInitialForm',demonstrationInitialForm);
router.post('/demonstrationInitialFormPost',demonstrationInitialFormPost);
router.get('/demonstrationInitialFormEdit/:id',demonstrationInitialFormEdit);
router.post('/demonstrationInitialFormEditPost/:id',demonstrationInitialFormEditPost);
router.get('/demonstrationInitialDelete/:id',demonstrationInitialDelete);

router.get('/demonstrationFinal',demonstrationFinal);
router.post('/demonstrationFinalYear',demonstrationFinalYear);
router.get('/demonstrationFinalForm',demonstrationFinalForm);
router.post('/demonstrationFinalFormPost',demonstrationFinalFormPost);
router.get('/demonstrationFinalFormEdit/:id',demonstrationFinalFormEdit);
router.post('/demonstrationFinalFormEditPost/:id',demonstrationFinalFormEditPost);
router.get('/demonstrationFinalDelete/:id',demonstrationFinalDelete);

router.get('/kochudemonstrationInitial',kochudemonstrationInitial);
router.post('/kochudemonstrationInitialYear',kochudemonstrationInitialYear);
router.get('/kochudemonstrationInitialForm',kochudemonstrationInitialForm);
router.post('/kochudemonstrationInitialFormPost',kochudemonstrationInitialFormPost);
router.get('/kochudemonstrationInitialFormEdit/:id',kochudemonstrationInitialFormEdit);
router.post('/kochudemonstrationInitialFormEditPost/:id',kochudemonstrationInitialFormEditPost);
router.get('/kochudemonstrationInitialDelete/:id',kochudemonstrationInitialDelete);

router.get('/kochudemonstrationFinal',kochudemonstrationFinal);
router.post('/kochudemonstrationFinalYear',kochudemonstrationFinalYear);
router.get('/kochudemonstrationFinalForm',kochudemonstrationFinalForm);
router.post('/kochudemonstrationFinalFormPost',kochudemonstrationFinalFormPost);
router.get('/kochudemonstrationFinalFormEdit/:id',kochudemonstrationFinalFormEdit);
router.post('/kochudemonstrationFinalFormEditPost/:id',kochudemonstrationFinalFormEditPost);
router.get('/kochudemonstrationFinalDelete/:id',kochudemonstrationFinalDelete);

router.get('/adademonstrationInitial',adademonstrationInitial);
router.post('/adademonstrationInitialYear',adademonstrationInitialYear);
router.get('/adademonstrationInitialForm',adademonstrationInitialForm);
router.post('/adademonstrationInitialFormPost',adademonstrationInitialFormPost);
router.get('/adademonstrationInitialFormEdit/:id',adademonstrationInitialFormEdit);
router.post('/adademonstrationInitialFormEditPost/:id',adademonstrationInitialFormEditPost);
router.get('/adademonstrationInitialDelete/:id',adademonstrationInitialDelete);
router.post('/generatePdfadademonstrationInitial',generatePdfadademonstrationInitial);


router.get('/adademonstrationFinal',adademonstrationFinal);
router.post('/adademonstrationFinalYear',adademonstrationFinalYear);
router.get('/adademonstrationFinalForm',adademonstrationFinalForm);
router.post('/adademonstrationFinalFormPost',adademonstrationFinalFormPost);
router.get('/adademonstrationFinalFormEdit/:id',adademonstrationFinalFormEdit);
router.post('/adademonstrationFinalFormEditPost/:id',adademonstrationFinalFormEditPost);
router.get('/adademonstrationFinalDelete/:id',adademonstrationFinalDelete);
router.post('/generatePdfadademonstrationFinal',generatePdfadademonstrationFinal);

//////////Gallery and File//
router.get("/trainedFarmerGallery", trainedFarmerGallery);
router.post("/trainedFarmerGalleryPost", uploadtrainedFarmer, trainedFarmerGalleryPost);
router.get("/trainedFarmerFile", trainedFarmerFile);
router.post("/trainedFarmerFilePost", uploadtrainedFarmerFile, trainedFarmerFilePost);

router.get("/saaoGallery", saaoGallery);
router.post("/saaoGalleryPost", uploadsaao, saaoGalleryPost);
router.get("/saaoFile", saaoFile);
router.post("/saaoFilePost", uploadsaaoFile, saaoFilePost);

router.get("/irrigationGallery", irrigationGallery);
router.post("/irrigationGalleryPost", uploadirrigation, irrigationGalleryPost);
router.get("/irrigationFile", irrigationFile);
router.post("/irrigationFilePost", uploadirrigationFile, irrigationFilePost);

router.get("/machineryGallery", machineryGallery);
router.post("/machineryGalleryPost", uploadmachinery, machineryGalleryPost);
router.get("/machineryFile", machineryFile);
router.post("/machineryFilePost", uploadmachineryFile, machineryFilePost);

router.get("/motivationGallery", motivationGallery);
router.post("/motivationGalleryPost", uploadmotivation, motivationGalleryPost);
router.get("/motivationFile", motivationFile);
router.post("/motivationFilePost", uploadmotivationFile, motivationFilePost);

router.get("/fieldDayGallery", fieldDayGallery);
router.post("/fieldDayGalleryPost", uploadfieldDay, fieldDayGalleryPost);
router.get("/fieldDayFile", fieldDayFile);
router.post("/fieldDayFilePost", uploadfieldDayFile, fieldDayFilePost);

router.get("/vermiCompostInitialGallery", vermiCompostInitialGallery);
router.post("/vermiCompostInitialGalleryPost", uploadvermiCompostInitial, vermiCompostInitialGalleryPost);
router.get("/vermiCompostInitialFile", vermiCompostInitialFile);
router.post("/vermiCompostInitialFilePost", uploadvermiCompostInitialFile, vermiCompostInitialFilePost);

router.get("/vermiCompostFinalGallery", vermiCompostFinalGallery);
router.post("/vermiCompostFinalGalleryPost", uploadvermiCompostFinal, vermiCompostFinalGalleryPost);
router.get("/vermiCompostFinalFile", vermiCompostFinalFile);
router.post("/vermiCompostFinalFilePost", uploadvermiCompostFinalFile, vermiCompostFinalFilePost);

router.get("/demonstrationInitialGallery", demonstrationInitialGallery);
router.post("/demonstrationInitialGalleryPost", uploaddemonstrationInitial, demonstrationInitialGalleryPost);
router.get("/demonstrationInitialFile", demonstrationInitialFile);
router.post("/demonstrationInitialFilePost", uploaddemonstrationInitialFile, demonstrationInitialFilePost);

router.get("/demonstrationFinalGallery", demonstrationFinalGallery);
router.post("/demonstrationFinalGalleryPost", uploaddemonstrationFinal, demonstrationFinalGalleryPost);
router.get("/demonstrationFinalFile", demonstrationFinalFile);
router.post("/demonstrationFinalFilePost", uploaddemonstrationFinalFile, demonstrationFinalFilePost);

router.get("/kochudemonstrationInitialGallery", kochudemonstrationInitialGallery);
router.post("/kochudemonstrationInitialGalleryPost", uploadkochudemonstrationInitial, kochudemonstrationInitialGalleryPost);
router.get("/kochudemonstrationInitialFile", kochudemonstrationInitialFile);
router.post("/kochudemonstrationInitialFilePost", uploadkochudemonstrationInitialFile, kochudemonstrationInitialFilePost);

router.get("/kochudemonstrationFinalGallery", kochudemonstrationFinalGallery);
router.post("/kochudemonstrationFinalGalleryPost", uploadkochudemonstrationFinal, kochudemonstrationFinalGalleryPost);
router.get("/kochudemonstrationFinalFile", kochudemonstrationFinalFile);
router.post("/kochudemonstrationFinalFilePost", uploadkochudemonstrationFinalFile, kochudemonstrationFinalFilePost);

router.get("/adademonstrationInitialGallery", adademonstrationInitialGallery);
router.post("/adademonstrationInitialGalleryPost", uploadadademonstrationInitial, adademonstrationInitialGalleryPost);
router.get("/adademonstrationInitialFile", adademonstrationInitialFile);
router.post("/adademonstrationInitialFilePost", uploadadademonstrationInitialFile, adademonstrationInitialFilePost);

router.get("/adademonstrationFinalGallery", adademonstrationFinalGallery);
router.post("/adademonstrationFinalGalleryPost", uploadadademonstrationFinal, adademonstrationFinalGalleryPost);
router.get("/adademonstrationFinalFile", adademonstrationFinalFile);
router.post("/adademonstrationFinalFilePost", uploadadademonstrationFinalFile, adademonstrationFinalFilePost);



module.exports = router;