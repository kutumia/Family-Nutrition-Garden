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

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');

module.exports.upazillatable=async(req,res)=>{
    res.json({ message: "hello upazilla" });
};

module.exports.allupazilla=async(req,res)=>{
    res.json({ message: "hello upazilla" });
};


module.exports.ddlogin=async(req,res)=>{
    res.render('dd/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'' });
    // res.send("log");
};

module.exports.ddloginpost=async(req,res)=>{
    try {
        const uname = req.body.uname;
        const password = req.body.password;
        dd.findAll({ where: {uname: uname} })
        .then(data => {
            if(data.length > 0){
                bcrypt.compare(password,data[0].password,function(err, result) {
                    if(result== true){
                        req.session.type = "dd";
                        req.session.user_id = data[0].id;
                        const id=req.session.user_id;
                        // res.locals.type = req.session.type;
                        // res.locals.user_id = req.session.user_id;
                        console.log("session=", req.session.type,res.locals);
                        // const token=jwt.sign({id},process.env.JWT_SECRET,token{
                        //     expiresIn:process.env.JWT_EXPIRES_IN
                        // });
                        // console.log("the token is :"+)
                        res.redirect('/dd/dashboard');
                    }
                    else{
                        return res.status(200).render('dd/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
                    }
                });
            }else{
                return res.status(200).render('dd/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
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

module.exports.ddDashboard = async(req,res) => {
    console.log("dddashboard",res.locals.type);
    res.render('dd/dashboard', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Welcome' });
};
//logIn controller end

//signUp controller
module.exports.ddsignup=async(req,res)=>{
    await ad.findAll()
    .then(data => {
        console.log("inside");
        res.render('dd/signup', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'',records: data });
    })
    .catch(err => {
        console.log("outside");
        res.render('dd/signup', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'',records: err });
    })
};
module.exports.ddsignuppost=async(req,res)=>{
    try {
        const{ads,uname,district,password,confirmPassword}=req.body;
        const ddata=await ad.findAll();
        const data = await dd.findAll({ where: {uname: uname} })
        if(data.length > 0){
            res.render('dd/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'ERROR: The dd is already enrolled!',records: ddata })
        }
        else if(password !== confirmPassword){
            return res.render('dd/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'ERROR: Passwords do not match!',records: ddata })
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            try{
                const createdd = await dd.create({
                    uname: uname,
                    district:district,
                    password:hashedPassword,
                    ad_id:ads,
                    pd_id:1
                    })
                res.render('dd/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'dd Registered Successfully!',records: ddata })
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
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.trainedFarmerFilter=async(req,res)=>{
    await trainedFarmer.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        console.log("data",data,req.body.year,req.body.upazilla,req.body.batch)
        res.render('dd/trainedFarmer/trainedFarmerTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/trainedFarmer/trainedFarmerYear', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: err });
    })

};

module.exports.trainedFarmerEdit=async(req,res)=>{
    await trainedFarmer.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/trainedFarmer/trainedFarmerEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.trainedFarmerEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await trainedFarmer.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/trainedFarmer');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//trainedFarmer controller end

//saao controller
module.exports.saao=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/saao/saao', { title: 'এসএএও প্রশিক্ষণ তথ্য',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/saao/saao', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.saaoFilter=async(req,res)=>{
    await saao.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        console.log("data",data,req.body.year,req.body.upazilla,req.body.batch)
        res.render('dd/saao/saaoTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/saao/saaoYear', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'', records: err });
    })

};

module.exports.saaoEdit=async(req,res)=>{
    await saao.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/saao/saaoEdit', { title: 'এসএএও প্রশিক্ষণ তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.saaoEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await saao.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/saao');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//saao controller end


//initialTrial controller
module.exports.initialTrial=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
    //  records:result

};

module.exports.initialTrialFilter=async(req,res)=>{
    await initialTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/initialTrial/initialTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/initialTrial/initialTrialYear', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};
module.exports.initialTrialEdit=async(req,res)=>{
    await initialTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside initialTrialEdit",data);
        res.render('dd/initialTrial/initialTrialEdit', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.initialTrialEditPost=async(req,res)=>{
    var ddComment= req.body.ddComment;
    console.log("req.params.id",req.params.id);
    await initialTrial.update({
        ddComment:ddComment
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/dd/initialTrial');
        }).catch(err => {
            res.render('errorpage',err);
        });
    };
//initialTrial controller end

//finalTrial controller
module.exports.finalTrial=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.finalTrialFilter=async(req,res)=>{
    await finalTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/finalTrial/finalTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/finalTrial/finalTrialYear', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};
module.exports.finalTrialEdit=async(req,res)=>{
    await finalTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/finalTrial/finalTrialEdit', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন ফর্ম',success:'',records: data });
    })
    .catch(err => {
        res.render('errorpage',err);
    })

//  records:result

};

module.exports.finalTrialEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await finalTrial.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/finalTrial');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//finalTrial controller end

//agriFair controller
module.exports.agriFair=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/agriFair/agriFair', { title: 'সেমিনার তথ্য',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/agriFair/agriFair', { title: 'সেমিনার তথ্য',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.agriFairFilter=async(req,res)=>{
    await agriFair.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        res.render('dd/agriFair/agriFairTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/agriFair/agriFairYear', { title: 'সেমিনার তথ্য',success:'', records: err });
    })

};
module.exports.agriFairEdit=async(req,res)=>{
    await agriFair.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/agriFair/agriFairEdit', { title: 'সেমিনার তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.agriFairEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await agriFair.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/agriFair');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//agriFair controller end

//irrigation controller
module.exports.irrigation=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/irrigation/irrigation', { title: 'জিরো এনার্জি কুল চেম্বার স্থাপন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/irrigation/irrigation', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.irrigationFilter=async(req,res)=>{
    await irrigation.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/irrigation/irrigationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/trainedFarmer/trainedFarmerYear', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য',success:'', records: err });
    })

};
module.exports.irrigationEdit=async(req,res)=>{
    await irrigation.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/irrigation/irrigationEdit', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.irrigationEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await irrigation.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/irrigation');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//irrigation controller end

//machinery controller
module.exports.machinery=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/machinery/machinery', { title: 'ক্ষুদ্র কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/machinery/machinery', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.machineryFilter=async(req,res)=>{
    await machinery.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/machinery/machineryTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/machinery/machineryYear', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন',success:'', records: err });
    })

};
module.exports.machineryEdit=async(req,res)=>{
    await machinery.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/machinery/machineryEdit', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.machineryEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await machinery.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/machinery');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//machinery controller end

//motivation controller
module.exports.motivation=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/motivation/motivation', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/motivation/motivation', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.motivationFilter=async(req,res)=>{
    await motivation.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        res.render('dd/motivation/motivationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/motivation/motivationYear', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',success:'', records: err });
    })

};
module.exports.motivationEdit=async(req,res)=>{
    await motivation.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/motivation/motivationEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.motivationEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await motivation.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/motivation');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//motivation controller end

//fieldDay controller
module.exports.fieldDay=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/fieldDay/fieldDay', { title: 'মাঠ দিবস তথ্য',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/fieldDay/fieldDay', { title: 'মাঠ দিবস তথ্য',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.fieldDayFilter=async(req,res)=>{
    await fieldDay.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        res.render('dd/fieldDay/fieldDayTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/fieldDay/fieldDayYear', { title: 'মাঠ দিবস তথ্য',success:'', records: err });
    })

};
module.exports.fieldDayEdit=async(req,res)=>{
    await fieldDay.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('dd/fieldDay/fieldDayEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.fieldDayEditPost=async(req,res)=>{
var ddComment= req.body.ddComment;
console.log("req.params.id",req.params.id);
await fieldDay.update({
    ddComment:ddComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/dd/fieldDay');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//fieldDay controller end

//vermiCompostInitial controller
module.exports.vermiCompostInitial=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/vermiCompostInitial/vermiCompostInitial', { title: 'কমিউনিটি বেইজড ভার্মি কম্পোস্ট উৎপাদন পিট স্থাপন প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/vermiCompostInitial/vermiCompostInitial', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.vermiCompostInitialFilter=async(req,res)=>{
    await vermiCompostInitial.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/vermiCompostInitial/vermiCompostTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/vermiCompostInitial/vermiCompostInitialYear', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};
//vermiCompostInitial controller end

//vermiCompostFinal controller
module.exports.vermiCompostFinal=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/vermiCompostFinal/vermiCompostFinal', { title: 'কমিউনিটি বেইজড ভার্মি কম্পোস্ট উৎপাদন পিট স্থাপন প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/vermiCompostFinal/vermiCompostFinal', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.vermiCompostFinalFilter=async(req,res)=>{
    await vermiCompostFinal.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        console.log("data",data,req.body.year,req.body.upazilla)
        res.render('dd/vermiCompostFinal/vermiCompostFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/vermiCompostFinal/vermiCompostFinalYear', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};
//vermiCompostFinal controller end

//demonstrationInitial controller
module.exports.demonstrationInitial=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/demonstrationInitial/demonstrationInitial', { title: 'পারিবারিক সবজি ও পুষ্টি বাগান স্থাপন প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/demonstrationInitial/demonstrationInitial', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.demonstrationInitialFilter=async(req,res)=>{
    await demonstrationInitial.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/demonstrationInitial/demonstrationInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/demonstrationInitial/demonstrationInitialYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};
//demonstrationInitial controller end

//demonstrationFinal controller
module.exports.demonstrationFinal=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/demonstrationFinal/demonstrationFinal', { title: 'পারিবারিক সবজি ও পুষ্টি বাগান স্থাপন প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/demonstrationFinal/demonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.demonstrationFinalFilter=async(req,res)=>{
    await demonstrationFinal.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/demonstrationFinal/demonstrationFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/demonstrationFinal/demonstrationFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};
//demonstrationFinal controller end

//adademonstrationInitial controller
module.exports.adademonstrationInitial=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/adademonstrationInitial/adademonstrationInitial', { title: 'ছায়াযুক্ত স্থান/বসতবাড়িতে আদা/হলুদ চাষ প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/adademonstrationInitial/adademonstrationInitial', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.adademonstrationInitialFilter=async(req,res)=>{
    await adademonstrationInitial.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/adademonstrationInitial/adademonstrationInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/adademonstrationInitial/adademonstrationInitialYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};
//adademonstrationInitial controller end

//adademonstrationFinal controller
module.exports.adademonstrationFinal=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/adademonstrationFinal/adademonstrationFinal', { title: 'ছায়াযুক্ত স্থান/বসতবাড়িতে আদা/হলুদ চাষ প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/adademonstrationFinal/adademonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.adademonstrationFinalFilter=async(req,res)=>{
    await adademonstrationFinal.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/adademonstrationFinal/adademonstrationFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/adademonstrationFinal/adademonstrationFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};
//adademonstrationFinal controller end

//kochudemonstrationInitial controller
module.exports.kochudemonstrationInitial=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/kochudemonstrationInitial/kochudemonstrationInitial', { title: 'স্যাঁতস্যাঁতে জমিতে কচু জাতীয় সবজি চাষ প্রদর্শনী এর প্রাথমিক প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/kochudemonstrationInitial/kochudemonstrationInitial', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.kochudemonstrationInitialFilter=async(req,res)=>{
    await kochudemonstrationInitial.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/kochudemonstrationInitial/kochudemonstrationInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/kochudemonstrationInitial/kochudemonstrationInitialYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};
//kochudemonstrationInitial controller end

//kochudemonstrationFinal controller
module.exports.kochudemonstrationFinal=async(req,res)=>{ 
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.session.user_id}});
        console.log("inside");
        res.render('dd/kochudemonstrationFinal/kochudemonstrationFinal', { title: 'স্যাঁতস্যাঁতে জমিতে কচু জাতীয় সবজি চাষ প্রদর্শনী এর চূড়ান্ত প্রতিবেদন',success:'',upazillas:upazillass });
    }
    catch(err){
        console.log("outside",err);
        res.render('dd/kochudemonstrationFinal/kochudemonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     
    //  records:result

};

module.exports.kochudemonstrationFinalFilter=async(req,res)=>{
    await kochudemonstrationFinal.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('dd/kochudemonstrationFinal/kochudemonstrationFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('dd/kochudemonstrationFinal/kochudemonstrationFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};
//kochudemonstrationFinal controller end
