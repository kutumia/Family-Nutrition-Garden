const db=require('../models');
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;       
const upazilla = db.upazilla;
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

const demonstrationInitial = db.demonstrationInitial;       
const demonstrationFinal = db.demonstrationFinal;
const kochudemonstrationInitial = db.kochudemonstrationInitial;       
const kochudemonstrationFinal = db.kochudemonstrationFinal;
const adademonstrationInitial = db.adademonstrationInitial;       
const adademonstrationFinal = db.adademonstrationFinal;

const multer = require("multer");
const path = require("path");

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');


module.exports.upazillalogin=async(req,res)=>{
    res.render('upazilla/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'' });
    res.send("log");
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
    res.render('upazilla/dashboard', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Welcome' });
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
    await trainedFarmer.findAll({
        where: {year: req.body.year,upazilla_id: req.session.user_id}
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