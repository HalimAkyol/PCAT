import photoModel from "../models/photoModel.js";

var getIndex   = async (req,res)=>{
    var AllPhoto=await photoModel.find({});
    res.render('index',
    {
        AllPhoto
    });
}
var getAbout   = (req,res)=>{
    res.render('about');
}

var getContact = (req,res)=>{
    res.render('contact');
}

export { getIndex, getAbout, getContact}
