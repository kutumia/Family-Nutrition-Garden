const db=require('../models');
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;       
const upazilla = db.upazilla;
const trainedFarmer = db.trainedFarmer;
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

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');


module.exports.pdlogin=async(req,res)=>{
    res.render('pd/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'' });
    res.send("log");
};

module.exports.pdloginpost=async(req,res)=>{
    try {
        const uname = req.body.uname;
        const password = req.body.password;
        pd.findAll({ where: {uname: uname} })
        .then(data => {
            if(data.length > 0){
                bcrypt.compare(password,data[0].password,function(err, result) {
                    if(result== true){
                        req.session.type = "pd";
                        req.session.user_id = data[0].id;
                        const id=req.session.user_id;
                        // res.locals.type = req.session.type;
                        // res.locals.user_id = req.session.user_id;
                        console.log("session=", req.session.type,res.locals);
                        // const token=jwt.sign({id},process.env.JWT_SECRET,token{
                        //     expiresIn:process.env.JWT_EXPIRES_IN
                        // });
                        // console.log("the token is :"+)
                        res.redirect('/pd/dashboard');
                    }
                    else{
                        return res.status(200).render('pd/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
                    }
                });
            }else{
                return res.status(200).render('pd/login', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
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

module.exports.pdDashboard = async(req,res) => {
    console.log("pddashboard",res.locals.type);
    res.render('pd/dashboard', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'Welcome' });
};
//logIn controller end

//signUp controller
module.exports.pdsignup=async(req,res)=>{
    res.render('pd/signup', { title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'' });
    res.send("log");
};
module.exports.pdsignuppost=async(req,res)=>{
    try {
        const{uname,password,confirmPassword}=req.body;

        const data = await pd.findAll({ where: {uname: uname} })
        if(data.length > 0){
            res.render('pd/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'ERROR: The pd is already enrolled!'})
        }
        else if(password !== confirmPassword){
            return res.render('pd/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'ERROR: Passwords do not match!'})
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            try{
                const createpd = await pd.create({
                    uname: uname,
                    password:hashedPassword,
                    pd_id:1
                    })
                res.render('pd/signup',{title: 'অনাবাদী পতিত জমি ও বসতবসড়ির আঙ্গিনায় পারিবারিক পুষ্টি বাগান স্থাপন প্রকল্প এ স্বাগতম',msg:'pd Registered Successfully!'})
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
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.trainedFarmerFilter=async(req,res)=>{
    await trainedFarmer.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        res.render('pd/trainedFarmer/trainedFarmerTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};

module.exports.trainedFarmerDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};

module.exports.trainedFarmerEdit=async(req,res)=>{
        await trainedFarmer.findByPk(req.params.id)
        .then(data => {
            console.log("inside",data);
            res.render('pd/trainedFarmer/trainedFarmerEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
        })
        .catch(err => {
            console.log("outside",err);
        })

    //  records:result

};

module.exports.trainedFarmerEditPost=async(req,res)=>{
    var pdComment= req.body.pdComment;
    console.log("req.params.id",req.params.id);
    await trainedFarmer.update({
        pdComment:pdComment
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/pd/trainedFarmer');
        }).catch(err => {
            res.render('errorpage',err);
        });
};
//trainedFarmer controller end

//initialTrial controller
module.exports.initialTrial=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.initialTrialFilter=async(req,res)=>{
    await initialTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/initialTrial/initialTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("error",err);
    })

};
module.exports.initialTrialDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("error",err);
    }
     

};
module.exports.initialTrialEdit=async(req,res)=>{
    await initialTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside initialTrialEdit",data);
        res.render('pd/initialTrial/initialTrialEdit', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.initialTrialEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await initialTrial.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/initialTrial');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//initialTrial controller end

//finalTrial controller
module.exports.finalTrial=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
    //  records:result

};

module.exports.finalTrialFilter=async(req,res)=>{
    await finalTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/finalTrial/finalTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);
    })

};
module.exports.finalTrialDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.finalTrialEdit=async(req,res)=>{
    await finalTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/finalTrial/finalTrialEdit', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন ফর্ম',success:'',records: data });
    })
    .catch(err => {
        res.render('errorpage',err);
    })

//  records:result

};

module.exports.finalTrialEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await finalTrial.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/finalTrial');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//finalTrial controller end

//agriFair controller
module.exports.agriFair=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/agriFair/agriFair', { title: 'সেমিনার তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.agriFairFilter=async(req,res)=>{
    await agriFair.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        res.render('pd/agriFair/agriFairTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};

module.exports.agriFairDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.agriFairEdit=async(req,res)=>{
    await agriFair.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/agriFair/agriFairEdit', { title: 'সেমিনার তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.agriFairEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await agriFair.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/agriFair');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//agriFair controller end

//irrigation controller
module.exports.irrigation=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/irrigation/irrigation', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.irrigationFilter=async(req,res)=>{
    await irrigation.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/irrigation/irrigationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};

module.exports.irrigationDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.irrigationEdit=async(req,res)=>{
    await irrigation.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/irrigation/irrigationEdit', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.irrigationEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await irrigation.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/irrigation');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//irrigation controller end

//machinery controller
module.exports.machinery=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/machinery/machinery', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.machineryFilter=async(req,res)=>{
    await machinery.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/machinery/machineryTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);
    })

};

module.exports.machineryDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.machineryEdit=async(req,res)=>{
    await machinery.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/machinery/machineryEdit', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.machineryEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await machinery.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/machinery');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//machinery controller end

//motivation controller
module.exports.motivation=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/motivation/motivation', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.motivationFilter=async(req,res)=>{
    await motivation.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        res.render('pd/motivation/motivationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};

module.exports.motivationDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.motivationEdit=async(req,res)=>{
    await motivation.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/motivation/motivationEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.motivationEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await motivation.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/motivation');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//motivation controller end

//fieldDay controller
module.exports.fieldDay=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/fieldDay/fieldDay', { title: 'মাঠ দিবস তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.fieldDayFilter=async(req,res)=>{
    await fieldDay.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla,batch:req.body.batch}
    })
    .then(data => {
        res.render('pd/fieldDay/fieldDayTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);
        })

};

module.exports.fieldDayDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.fieldDayEdit=async(req,res)=>{
    await fieldDay.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/fieldDay/fieldDayEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.fieldDayEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await fieldDay.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/fieldDay');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
//fieldDay controller end
//vermiCompostInitial controller
module.exports.vermiCompostInitial=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/vermiCompostInitial/vermiCompostInitial', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/vermiCompostInitial/vermiCompostInitial', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন',success:''});
    }
     
    //  records:result

};

module.exports.vermiCompostInitialFilter=async(req,res)=>{
    await vermiCompostInitial.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/vermiCompostInitial/vermiCompostInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('pd/vermiCompostInitial/vermiCompostInitialYear', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};

module.exports.vermiCompostInitialDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/vermiCompostInitial/vermiCompostInitial', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
     

};
//vermiCompostInitial controller end

//vermiCompostFinal controller
module.exports.vermiCompostFinal=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/vermiCompostFinal/vermiCompostFinal', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) চূড়ান্ত প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/vermiCompostFinal/vermiCompostFinal', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) চূড়ান্ত প্রতিবেদন',success:''});
    }
     
    //  records:result

};

module.exports.vermiCompostFinalFilter=async(req,res)=>{
    await vermiCompostFinal.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        console.log("data",data);
        res.render('pd/vermiCompostFinal/vermiCompostTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log(err)
    })

};

module.exports.vermiCompostFinalDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/vermiCompostFinal/vermiCompostFinal', { title: 'প্রদর্শনীর (ভার্মি কম্পোস্ট) চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     

};
//vermiCompostFinal controller end

//demonstrationInitial controller
module.exports.demonstrationInitial=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/demonstrationInitial/demonstrationInitial', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/demonstrationInitial/demonstrationInitial', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:''});
    }
     
    //  records:result

};

module.exports.demonstrationInitialFilter=async(req,res)=>{
    await demonstrationInitial.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/demonstrationInitial/demonstrationInitialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('pd/demonstrationInitial/demonstrationInitialYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', records: err });
    })

};

module.exports.demonstrationInitialDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/demonstrationInitial/demonstrationInitial', { title: 'প্রদর্শনীর (দানাদার ধরণের) প্রাথমিক প্রতিবেদন',success:'', upazillas:err });
    }
     

};
//demonstrationInitial controller end

//demonstrationFinal controller
module.exports.demonstrationFinal=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/demonstrationFinal/demonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/demonstrationFinal/demonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:''});
    }
     
    //  records:result

};

module.exports.demonstrationFinalFilter=async(req,res)=>{
    await demonstrationFinal.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/demonstrationFinal/demonstrationFinalTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('pd/demonstrationFinal/demonstrationFinalYear', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', records: err });
    })

};

module.exports.demonstrationFinalDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
        res.render('pd/demonstrationFinal/demonstrationFinal', { title: 'প্রদর্শনীর (দানাদার ধরণের) চূড়ান্ত প্রতিবেদন',success:'', upazillas:err });
    }
     

};
//demonstrationFinal controller end